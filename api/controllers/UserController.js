const mongoose = require("mongoose");
const userModel = require("../models/User");

module.exports = {
  create: (req, res, next) => {
    userModel.create(req.body)
      .then(() => res.json("Successfully created new user"))
      .catch(err => res.status(500).json(err));
  },

  get: (req, res, next) => {
    userModel.fetch()
      .then(users => res.json({ users }))
      .catch(err => res.status(500).json(err));
  },

  update: (req, res, next) => {
    userModel.update(req.params.id, req.body)
      .then(user => res.json({ user }))
      .catch(err => res.status(500).json(err));
  },

  remove: (req, res, next) => {
    userModel.remove(req.params.id)
      .then(() => res.json(`User ${req.params.id} has been succesfully deleted!`))
      .catch(err => res.status(500).json(err));
  }
}