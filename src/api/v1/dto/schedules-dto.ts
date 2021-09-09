export interface SchedulesDTO {
    _id?: string;
    exams: Array<Exams>;
    reservationId?: string;
    date?: string;
    time?: string;
    unitId?: number;
    status?: number;
    charge?: Price;
    patient?: Patient;
    record?: Record;
    appId?: string;
    gradeKey?: string;
    createdAt?: Date;
    updatedAt?: Date;
    company?: any;
    companyCategory?: any;
    discount?: any;
}

export interface SchedulesCreate {
    grade : any,
    schedules: any,
}

export interface Exams {
    slug?: string;
}

export interface Record {
    clientId?: string;
    privateIndividualId?: string;
}

export interface Price {
    price?: number;
}

export interface Patient {
    cpf?: string;
    fullname?: string;
    phone?: string;
    sex?: string;
    email?: string;
    name?: string;
    birthday?: string;
    address?: Address;
}

export interface Address {
    cep?: string;
    city?: string;
    uf?: string;
    address?: string;
}