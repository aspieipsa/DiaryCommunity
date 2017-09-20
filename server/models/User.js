let mongoose = require("mongoose"),
  ObjectId = mongoose.Schema.Types.ObjectId,
  userSchema = new mongoose.Schema({
    name: String,
    customURL: String,
    email: String,
    info: String,
    favorites: [ObjectId]
  });

module.exports = mongoose.model("User", userSchema);
