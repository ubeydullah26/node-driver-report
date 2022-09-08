const Joi = require('joi');

const createValidation = Joi.object({
    tourId: Joi.string().required(),
    destination: Joi.string().required(),
    departure: Joi.string().required(),
});

const updateValidation = Joi.object({
    tourId: Joi.string().required(),
    destination: Joi.string().required(),
    departure: Joi.string().required(),
});

module.exports = {
    createValidation,
    updateValidation,
};