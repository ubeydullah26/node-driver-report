const Joi = require('joi');

const createValidation = Joi.object({
    name: Joi.string().required().min(2),
    surname: Joi.string().required().min(2),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    role: Joi.string().required().valid('driver', 'admin'),
    no: Joi.string().required().min(2)
});

const updateValidation = Joi.object({
    name: Joi.string().min(2),
    surname: Joi.string().min(2),
    email: Joi.string().email(),
    role: Joi.string().valid('driver', 'admin'),
    no: Joi.string().min(2)
});

const loginValidation = Joi.object({
    no: Joi.string().required().min(2),
    password: Joi.string().required().min(6),
});

module.exports = {
    createValidation,
    updateValidation,
    loginValidation
};