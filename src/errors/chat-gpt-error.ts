import { CustomError } from './custom-error';

export class ChatGPTError extends CustomError {
  statusCode: number = 503;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, ChatGPTError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
