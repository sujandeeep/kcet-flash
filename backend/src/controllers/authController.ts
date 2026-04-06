import type { Request, Response } from 'express';
import { enableTwoFactor, loginUser, loginWithGoogle, registerUser } from '../services/authService.js';

export async function register(req: Request, res: Response) {
  try {
    const result = await registerUser(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const result = await loginUser(req.body);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function google(req: Request, res: Response) {
  try {
    const result = await loginWithGoogle(req.body.idToken);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function setupTwoFactor(req: Request, res: Response) {
  try {
    const result = await enableTwoFactor(req.auth!.userId);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}
