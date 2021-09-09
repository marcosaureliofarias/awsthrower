import { HttpGenericError } from './http-generic-error';
import { HttpStatus } from '../constants';

export class PreConditionError extends HttpGenericError {
    constructor(message: string, data?: Record<string, unknown> | string | Array<unknown>, stack?: string) {
        super(200, message, data, stack);
    }
}
