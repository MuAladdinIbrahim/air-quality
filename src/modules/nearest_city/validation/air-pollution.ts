import * as Joi from 'joi'
import { CustomError } from '../../../utils/CustomError';

class NearestCityValidator {
    constructor() { }

    AirPollution(input: any) {
        const schema = Joi.object({
            lat: Joi.number().min(-90).max(90).required(),
            lon: Joi.number().min(-180).max(180).required()
        });
        const { error } = schema.validate(input);
        if( error ) throw new CustomError(`Error validating incoming request, ${error.details[0]?.message}`, 400)
    }
}

const nearestCityValidator = new NearestCityValidator()
export {
    nearestCityValidator
}