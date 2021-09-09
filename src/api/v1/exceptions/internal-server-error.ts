import { HttpGenericError } from './http-generic-error';

export class InternalServerError extends HttpGenericError {
    constructor(message: string, data?: Record<string, unknown> | string, stack?: string) {
        super(200, message, data, stack);
    }
}
