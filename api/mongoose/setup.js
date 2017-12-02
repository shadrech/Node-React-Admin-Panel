const mongoose = require("mongoose");
const getUserSchema = require("./User");

module.exports = () => {
  mongoose.connect("mongodb://localhost:27017", (err) => {
    if (err) console.error("Error connecting to mongo!");
    
    const UserSchema = getUserSchema();
    mongoose.Model("User", UserSchema);
  });
}
