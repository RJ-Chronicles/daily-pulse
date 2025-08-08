import { Request, Response } from 'express';

import { CustomError } from '../errors/custom-error';

const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  //next: NextFunction Need to fix this
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  return res.status(400).send({ errors: [{ message: 'Bad Request' }] });
};

export default ErrorHandler;
