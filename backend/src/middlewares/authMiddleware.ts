import type { NextFunction, Request, Response } from 'express';
import { verifyAccessToken } from '../services/tokenService.js';

declare global {
  namespace Express {
    interface Request {
      auth?: { userId: string; email: string };
    }
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const token = authHeader.replace('Bearer ', '');
    const payload = verifyAccessToken(token);
    req.auth = { userId: payload.sub, email: payload.email };
    return next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
