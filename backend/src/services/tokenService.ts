import jwt from 'jsonwebtoken';
import type { UserModel } from '../models/types.js';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

export function signAccessToken(user: UserModel) {
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
      provider: user.provider,
    },
    JWT_SECRET,
    { expiresIn: '12h' },
  );
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as { sub: string; email: string };
}

export function signTwoFactorToken(user: UserModel) {
  return jwt.sign({ sub: user.id, twoFactorPending: true }, JWT_SECRET, { expiresIn: '5m' });
}

export function verifyTwoFactorToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as { sub: string; twoFactorPending: boolean };
}
