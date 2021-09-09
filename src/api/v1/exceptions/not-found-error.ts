import { HttpGenericError } from './http-generic-error';
import { HttpStatus } from '../constants';

export class NotFoundError extends HttpGenericError {
    constructor(message: string, data?: Record<string, unknown> | string, stack?: string) {
        super(200, message, data, stack);
    }
}
