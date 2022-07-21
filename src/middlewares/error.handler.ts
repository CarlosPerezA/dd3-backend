import { Request, Response, NextFunction } from 'express';

function boomErrorHandler (err: { isBoom?: boolean; output?: any; }, _req: Request, res: Response, next: NextFunction) {
  if(err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

export default boomErrorHandler;
