const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authenticate');
const schemas = require('../validations/Tours');
const express = require('express');
const {index, create, update, destroy} = require('../controllers/Tours');
const router = express.Router();

router.route('/').get(authenticate, index);
router.route('/').post(authenticate, validate(schemas.createValidation), create);
router.route('/:id').patch(authenticate, validate(schemas.updateValidation), update);
router.route('/:id').delete(authenticate, destroy);

module.exports = router