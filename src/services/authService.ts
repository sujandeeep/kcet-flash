import type { AuthPayload } from '../types';
import { api } from './api';

export interface LoginInput {
  email: string;
  password: string;
  twoFactorCode?: string;
  twoFactorToken?: string;
}

export const authService = {
  register: (email: string, password: string, displayName?: string) =>
    api.post<AuthPayload>('/auth/register', { email, password, displayName }).then((r) => r.data),
  login: (payload: LoginInput) => api.post<AuthPayload>('/auth/login', payload).then((r) => r.data),
  google: (idToken: string) => api.post<AuthPayload>('/auth/google', { idToken }).then((r) => r.data),
};
