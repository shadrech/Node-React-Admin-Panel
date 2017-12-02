const mongoose = require("mongoose");

module.exports = {
  create: (fields) => {
    const User = mongoose.model("User");
    const user = new User({
      firstname: fields.firstname,
      lastname: fields.lastname,
      email: fields.email,
    });
    user.setPassword(fields.password);

    return user.save();
  },

  fetch: () => {
    return mongoose.model("User").find().select("-__v -password").exec()
      .then(response => response);
  },

  update: (id, fields) => {
    return mongoose.model("User").findByIdAndUpdate(id, fields, {new: true})
      .select("-__v -password")
      .exec()
      .then(response => response);
  },

  remove: (id) => {
    return mongoose.model("User").findByIdAndRemove(id).exec();
  }
}
