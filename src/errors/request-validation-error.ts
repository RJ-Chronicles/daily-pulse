import { ValidationError } from 'express-validator';

import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode: number = 400;
  // eslint-disable-next-line no-unused-vars
  constructor(public errors: ValidationError[]) {
    super('Invalid Request Parameters');
    // Only necessary because we're extending a built-in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      if (error.type === 'field') {
        return { message: error.msg, field: error.path };
      }
      return { message: error.msg };
    });
  }
}
