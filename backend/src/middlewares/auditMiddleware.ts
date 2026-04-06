import type { NextFunction, Request, Response } from 'express';

export function auditMiddleware(req: Request, _res: Response, next: NextFunction) {
  const actor = req.auth?.email || 'anonymous';
  console.log(`[AUDIT] ${new Date().toISOString()} actor=${actor} method=${req.method} path=${req.path}`);
  next();
}
