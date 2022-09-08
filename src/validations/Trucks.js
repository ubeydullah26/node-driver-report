const Joi = require('joi');

const createValidation = Joi.object({
    no: Joi.string().required().min(2),
});

const updateValidation = Joi.object({
    no: Joi.string().required().min(2),
});

module.exports = {
    createValidation,
    updateValidation,
};