export class HttpGenericError extends Error {
    statusCode: number;
    data: unknown;
    constructor(statusCode: number, message: string, data?: unknown, stack?: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.stack = stack;
    }
}
