import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode: number = 404;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
