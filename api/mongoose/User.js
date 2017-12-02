const mongoose = require("mongoose");
const bycrypt = require("bcrypt");

module.exports = getUserSchema;

const getUserSchema = () => {
  const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
      type: String,
      min: 6,
      unique: true
    },
    password: {
      type: String,
      unique: true
    }
  });

  userSchema.methods.getFullName = function() {
    return `${this.firstname} ${this.lastname}`;
  }

  userSchema.methods.setPassword = function(password) {
    return bycrypt.hash(password, 10, (err, hash) => {
      this.password = hash;
    });
  }

  userSchema.methods.isValidPassword = function(str) {
    return bycrypt.compare(str, this.password, (err, res) => !!res);
  }

  return userSchema;
}