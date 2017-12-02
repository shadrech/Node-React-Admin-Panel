const {exports} = module;
const mongoose = require("mongoose");

exports.create = (fields) => {
  const User = mongoose.model("User");
  const newUser = new User();
  
  newUser.firstname = fields.firstname;
  newUser.lastname = fields.lastname;
  newUser.email = fields.email;
  
  newUser.setPassword(fields.password)
    .then()
}
