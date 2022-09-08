const Joi = require('joi');

const createValidation = Joi.object({
    no: Joi.string().required(),
    reportId: Joi.string().required(),
    truckId: Joi.string().required(),
});

const updateValidation = Joi.object({
    no: Joi.string().required(),
});

module.exports = {
    createValidation,
    updateValidation,
};