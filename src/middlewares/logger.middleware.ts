import type { Request, Response, NextFunction } from 'express'

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log('[LOG] Peticion entrante: ${req.method} a ${req.url}');
  next();
};

