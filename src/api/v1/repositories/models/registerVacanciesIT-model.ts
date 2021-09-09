import * as mongoose from "mongoose"

export interface IRegisterVacanciesITModel extends mongoose.Document {
    JobTitle: string;
    CompanyName: string;
    TypeOfContract: string;
    SalaryRange: string;
    JobDescription: string;
    Observation: string;
}

const Schema = new mongoose.Schema(
    {
        JobTitle: {
            type: String,
            required: true,
        },
        CompanyName: {
            type: String,
            required: true,
        },
        TypeOfContract: {
            type: String,
            required: true,
        },
        SalaryRange: {
            type: String,
            required: true,
        },
        JobDescription: {
            type: String,
            required: true,
        },
        Observation: {
            type: String,
            required: true,
        },
    },
);

const RegisterVacanciesIT = mongoose.model<IRegisterVacanciesITModel>('RegisterVacanciesIT', Schema, 'register_vacancies_IT', true);

export { RegisterVacanciesIT };