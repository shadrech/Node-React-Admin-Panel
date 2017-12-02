const mongoose = require("mongoose");
const userModel = require("../models/User");

module.exports = {
  create: (req, res, next) => {
    
  },

  get: (req, res, next) => {
    res.send("GETTING!");
  },

  edit: (req, res, next) => {
    res.send("EDITING");
  },

  delete: (req, res, next) => {
    res.send("DELETING!");
  }
}