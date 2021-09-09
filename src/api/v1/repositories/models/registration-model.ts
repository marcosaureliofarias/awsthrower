import * as mongoose from 'mongoose';

export interface IProfessionalRegistrationModel extends mongoose.Document {
    nameCompany: string;
    titleJob: string;
    webSite: string;
    typeContraction: string;
    note: string;
    salary: Array<Number>;
}

const Schema = new mongoose.Schema(
    {
        nameCompany: {
            type: String,
            required: true,
        },
        titleJob: {
            type: String,
            required: true,
        },
        webSite: {
            type: String,
            required: true,
        },
        typeContraction: {
            type: String,
            required: true,
        },
        note: {
            type: String,
            required: true,
        },
        salary: {
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const ProfessionalRegistration = mongoose.model<IProfessionalRegistrationModel>('ProfessionalRegistration', Schema, 'professional_registration', true);

export { ProfessionalRegistration };