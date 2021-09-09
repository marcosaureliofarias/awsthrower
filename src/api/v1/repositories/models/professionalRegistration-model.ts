import * as mongoose from "mongoose"

export interface IProfessionalRegistrationModel extends mongoose.Document {
    name: string;
    surname: string;
    yearBirth: string;
    Linkedin: string;
}

const Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        yearBirth: {
            type: String,
            required: true,
        },
        Linkedin: {
            type: String,
            required: true,
        },
    },
);

const ProfessionalRegistration = mongoose.model<IProfessionalRegistrationModel>('ProfessionalRegistration', Schema, 'professional_registration', true);

export { ProfessionalRegistration };