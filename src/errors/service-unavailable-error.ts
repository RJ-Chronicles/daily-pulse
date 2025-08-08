import { CustomError } from './custom-error';

export class ServiceUnavailableError extends CustomError {
  statusCode: number = 503;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
