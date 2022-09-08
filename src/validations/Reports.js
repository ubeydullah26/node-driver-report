const Joi = require('joi');

const createValidation = Joi.object({
    startTime: Joi.string().required(),
    endTime: Joi.string().required(),
    startKm: Joi.number().required(),
    endKm: Joi.number().required(),
    fuel: Joi.number(),
});

const updateValidation = Joi.object({
    startTime: Joi.string().required(),
    endTime: Joi.string().required(),
    startKm: Joi.number().required(),
    endKm: Joi.number().required(),
    fuel: Joi.number(),
});

module.exports = {
    createValidation,
    updateValidation,
};