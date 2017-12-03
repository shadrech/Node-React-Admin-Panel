const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

const getUserSchema = () => {
  const userSchema = new mongoose.Schema({
    _id: {
      type: String,
      "default": shortid.generate
    },
    firstname: {
      type: String,
      trim: true
    },
    lastname: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      min: 6,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      trim: true
    }
  });

  userSchema.methods.getFullName = function() {
    return `${this.firstname} ${this.lastname}`;
  }

  userSchema.methods.setPassword = function(password) {
    const salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(password, salt);

    this.password = hash;
  }

  userSchema.methods.isValidPassword = function(str) {
    return bycrypt.compareSync(str, this.password);
  }

  return userSchema;
}

module.exports = getUserSchema;