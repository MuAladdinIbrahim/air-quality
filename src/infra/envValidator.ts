import Joi from 'joi'

class EnvVarValidator {
    constructor() { }

    dotenv(vars: any) {
        const schema = Joi.object().keys({
            PORT: Joi.number().required(),
            IQAIR_KEY: Joi.string().required(),
            IQAIR_URL: Joi.string().required(),
            MONGODB_URL: Joi.string().required(),
            MONGODB_NAME: Joi.string().required(),
        }).unknown();
        const { error } = schema.validate(vars);
        if (error) throw new Error(`.env file lack some env variables, ${error.message}`)
    }
}

const envVarValidator = new EnvVarValidator()

export const checkEnvVar = () => {
    envVarValidator.dotenv(process.env)
}