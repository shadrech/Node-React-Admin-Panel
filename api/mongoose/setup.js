const mongoose = require("mongoose");
const getUserSchema = require("./User");

module.exports = () => {
  mongoose.connect("mongodb://localhost:27017", {useMongoClient: true} , (err) => {
    if (err) console.error("Error connecting to mongo!");

    mongoose.Promise = Promise;
    
    const UserSchema = getUserSchema();
    mongoose.model("User", UserSchema);
  });
}
