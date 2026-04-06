import bcrypt from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library';
import speakeasy from 'speakeasy';
import { v4 as uuidv4 } from 'uuid';
import type { UserModel } from '../models/types.js';
import { createDocument, getByField, upsertById } from './firestoreService.js';
import { signAccessToken, signTwoFactorToken, verifyTwoFactorToken } from './tokenService.js';

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function registerUser(input: { email: string; password: string; displayName?: string }) {
  const existingUser = await getByField<UserModel>('users', 'email', input.email);
  if (existingUser) throw new Error('User already exists');

  const passwordHash = await bcrypt.hash(input.password, 12);
  const user = await createDocument<UserModel>('users', {
    email: input.email,
    displayName: input.displayName,
    passwordHash,
    provider: 'password',
    twoFactorEnabled: false,
    createdAt: new Date().toISOString(),
  });

  return { user, token: signAccessToken(user) };
}

export async function loginUser(input: {
  email: string;
  password: string;
  twoFactorCode?: string;
  twoFactorToken?: string;
}) {
  const user = await getByField<UserModel>('users', 'email', input.email);
  if (!user?.passwordHash) throw new Error('Invalid credentials');

  const passwordValid = await bcrypt.compare(input.password, user.passwordHash);
  if (!passwordValid) throw new Error('Invalid credentials');

  if (user.twoFactorEnabled) {
    if (!input.twoFactorCode || !input.twoFactorToken) {
      return {
        requiresTwoFactor: true,
        twoFactorToken: signTwoFactorToken(user),
      };
    }

    const twoFactorPayload = verifyTwoFactorToken(input.twoFactorToken);
    if (twoFactorPayload.sub !== user.id) throw new Error('Invalid 2FA session');

    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret || '',
      encoding: 'base32',
      token: input.twoFactorCode,
      window: 1,
    });

    if (!verified) throw new Error('Invalid 2FA code');
  }

  return { user, token: signAccessToken(user) };
}

export async function loginWithGoogle(idToken: string) {
  const ticket = await googleClient.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  if (!payload?.email) throw new Error('Google account email unavailable');

  let user = await getByField<UserModel>('users', 'email', payload.email);

  if (!user) {
    user = {
      id: uuidv4(),
      email: payload.email,
      displayName: payload.name,
      provider: 'google',
      twoFactorEnabled: false,
      createdAt: new Date().toISOString(),
    };
    await upsertById('users', user.id, user);
  }

  return { user, token: signAccessToken(user) };
}

export async function enableTwoFactor(userId: string) {
  const secret = speakeasy.generateSecret({ name: 'KCET Flash' });
  const user = await getByField<UserModel>('users', 'id', userId);
  if (!user) throw new Error('User not found');

  await upsertById('users', userId, {
    ...user,
    twoFactorEnabled: true,
    twoFactorSecret: secret.base32,
  });

  return { secret: secret.otpauth_url };
}
