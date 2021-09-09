import * as mongoose from 'mongoose';

export interface IStatusModel extends mongoose.Document {
    status: string;
    description: string;

}

const Schema = new mongoose.Schema(
    {
        status: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Status = mongoose.model<IStatusModel>('status', Schema, 'status_processing', true);

export { Status };