function validationErrorHandler(err, req, res, next) {
  console.log("BODY", req.body);
  if (err.name === "JsonSchemaValidationError") {
    console.log("SCHEMA ERROR: ", err);
    return res.status(400).json(err);
  } else {
    next(err);
  }
}

module.exports = validationErrorHandler;