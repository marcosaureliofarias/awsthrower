import { Request } from 'express';

export interface GetAllCareUnitsRequest extends Request {
    query: {
        offSet: string;
        limit: string;
        gradeStatus?: string;
        gradeTag?: Array<string>;
        isBradescoAgence?: string;
        agenceCode?: string;
        lat?: string;
        lng?: string;
        maxDistance?: string;
        uf: string;
        modality: string;
        vaccines: string;
    };
}
