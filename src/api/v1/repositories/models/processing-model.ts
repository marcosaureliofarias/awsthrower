import * as mongoose from 'mongoose';

let schema = mongoose.Schema;
let ObjectId = schema.Types.ObjectId;

export interface IProcessingModel extends mongoose.Document {
    _id_registration: string;
    _id_status: string;

}

const Schema = new mongoose.Schema(
    {
        _id_registration: {
            type: String,
            required: true,
        },
        _id_status: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Processing = mongoose.model<IProcessingModel>('Processing', Schema, 'processing', true);

export { Processing };