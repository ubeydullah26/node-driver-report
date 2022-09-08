const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const schemas = require("../validations/Users");
const express = require("express");
const {
  index,
  create,
  login,
  update,
  destroy,
  reportList,
  tourList,
  destinationList,
} = require("../controllers/Users");
const router = express.Router();

router.route("/").get(authenticate, index);
router.route("/").post(validate(schemas.createValidation), create);
router
  .route("/:id")
  .patch(authenticate, validate(schemas.updateValidation), update);
router.route("/:id").delete(authenticate, destroy);
router.route("/login").post(validate(schemas.loginValidation), login);
router.route("/reports").get(authenticate, reportList);
router.route("/tours").get(authenticate, tourList);
router.route("/destinations").get(authenticate, destinationList);

module.exports = router;
