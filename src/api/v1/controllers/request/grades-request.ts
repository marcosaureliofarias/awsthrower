import { Request } from 'express';
import { UnitGradeStatus } from '../../enums';

export interface GetAllGradesRequest extends Request {
    query: {
        offSet: string;
        limit: string;
        unitId?: string;
        key?: string;
        date?: string;
        sigla?: string;
        status?: string;
        modality?: string;
    };
}

export interface UpdateGradesRequest extends Request {
    payload: {
        unitId: number;
        key: string;
        date: string;
        timetable: Array<any>;
        status: UnitGradeStatus;
        createdAt?: Date;
        updatedAt?: Date;
    };
}

export interface BlockGradesRequest extends Request {
    payload: {
        unitId?: Array<number>;
        key?: string;
        date?: Array<string>;
        status?: UnitGradeStatus;
        initialTime?: string;
        finalTime?: string;
    };
}
