const router = require("express").Router();

const { ValidationError, Validator } = require("express-json-validator-middleware");
const v = new Validator({allErrors: true});
const schemas = require("./validateSchemas");

const userController = require("../controllers/UserController");

router.route("/users")
  .get(userController.get)
  .post(v.validate({body: schemas.NewUserSchema}), userController.create);

router.route("/users/:id")
  .get(userController.get)
  .put(v.validate({body: schemas.EditUserSchema}), userController.update)
  .delete(userController.remove);

module.exports = router;
