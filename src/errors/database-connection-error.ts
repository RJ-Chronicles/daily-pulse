import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode: number = 500;
  reason: string = 'Error connecting to database';
  constructor() {
    super('Error connecting to database');
    Object.setPrototypeOf(this, DatabaseConnectionError);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.reason }];
  }
}
