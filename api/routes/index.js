const router = require("express").Router();
const jwt = require("express-jwt");

const { ValidationError, Validator } = require("express-json-validator-middleware");
const v = new Validator({allErrors: true});
const schemas = require("./validateSchemas");

const adminController = require("../controllers/AdminController");
const userController = require("../controllers/UserController");

router.post("/login", adminController.login);

router.route("/users")
  .get(userController.get)
  .post(v.validate({body: schemas.NewUserSchema}), userController.create);

router.route("/users/:id")
  .get(userController.get)
  .put(v.validate({body: schemas.EditUserSchema}), userController.edit)
  .delete(v.validate({body: schemas.DeleteUserSchema}), userController.delete);

module.exports = router;
