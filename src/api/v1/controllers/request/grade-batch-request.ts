import { Request } from 'express';

export interface GradeBatchRequest extends Request {
  payload: {
    startDate: string;
    endDate: string;
    file: Buffer;
  };
}
