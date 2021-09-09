import * as mongoose from "mongoose"

export interface ITecnologiesModel extends mongoose.Document {
    tecnologies: string;
}

const Schema = new mongoose.Schema(
    {
        tecnologies: {
            type: String,
            required: true,
        },
    },
);

const Tecnologies = mongoose.model<ITecnologiesModel>('Tecnologies', Schema, 'tecnologies', true);

export { Tecnologies };