import { HttpGenericError } from './http-generic-error';

export class ConflictError extends HttpGenericError {
    constructor(message: string, data?: Record<string, unknown> | string, stack?: string) {
        super(200, message, data, stack);
    }
}
