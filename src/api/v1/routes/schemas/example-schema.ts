import * as Joi from 'joi';
import { SchemaValidator } from '../validations';

export class ExampleSchemaValidator {
    private static body = Joi.object({
        name: Joi.string().required().description('Example name field'),
        age: Joi.number().min(18).required().description('Example age field'),
    });

    static post(): SchemaValidator {
        return {
            body: ExampleSchemaValidator.body,
        };
    }

    static put(): SchemaValidator {
        return {
            body: ExampleSchemaValidator.body,
            params: Joi.object({
                id: Joi.number().required(),
            }),
        };
    }
}
