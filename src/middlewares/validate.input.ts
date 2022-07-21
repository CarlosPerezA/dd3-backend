import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';

function validatorHandler (dto: { validate: (arg0: any) => { error: any; }; } , property: 'body' | 'params') {
  return (req: Request, _res: Response, next: NextFunction) => {
    const data = req[property];
    const { error } = dto.validate(data);
      if(error) {
        next(boom.badRequest(error));
      }
      next();
  }
};

export default validatorHandler;
