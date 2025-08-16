import { ZodIssue } from 'zod';

import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  // eslint-disable-next-line no-unused-vars
  constructor(public errors: ZodIssue[]) {
    super('Invalid Request Parameters');

    // Required when extending built-in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      return {
        message: error.message,
        field: error.path.join('.'),
      };
    });
  }
}
