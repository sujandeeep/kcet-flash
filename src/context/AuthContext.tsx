import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { authService, type LoginInput } from '../services/authService';
import { tokenStorage } from '../utils/storage';
import type { User } from '../types';

interface AuthContextValue {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (input: LoginInput) => Promise<{ requiresTwoFactor?: boolean; twoFactorToken?: string }>;
  register: (email: string, password: string, displayName?: string) => Promise<void>;
  loginWithGoogleToken: (idToken: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(tokenStorage.get());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) return;
    try {
      const payload = JSON.parse(atob(token.split('.')[1])) as { sub: string; email: string };
      setUser({ id: payload.sub, email: payload.email });
    } catch {
      tokenStorage.clear();
      setToken(null);
    }
  }, [token]);

  const login = useCallback(async (input: LoginInput) => {
    setLoading(true);
    const response = await authService.login(input);
    if (response.requiresTwoFactor) {
      setLoading(false);
      return { requiresTwoFactor: true, twoFactorToken: response.twoFactorToken };
    }

    tokenStorage.set(response.token);
    setToken(response.token);
    setUser(response.user);
    setLoading(false);
    return {};
  }, []);

  const register = useCallback(async (email: string, password: string, displayName?: string) => {
    setLoading(true);
    const response = await authService.register(email, password, displayName);
    tokenStorage.set(response.token);
    setToken(response.token);
    setUser(response.user);
    setLoading(false);
  }, []);

  const loginWithGoogleToken = useCallback(async (idToken: string) => {
    setLoading(true);
    const response = await authService.google(idToken);
    tokenStorage.set(response.token);
    setToken(response.token);
    setUser(response.user);
    setLoading(false);
  }, []);

  const logout = useCallback(() => {
    tokenStorage.clear();
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, token, loading, login, register, loginWithGoogleToken, logout }),
    [user, token, loading, login, register, loginWithGoogleToken, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
