let mongoose = require("mongoose"),
  ObjectId = mongoose.Schema.Types.ObjectId,
  userSchema = new mongoose.Schema({
    userID: ObjectId,
    name: String,
    customURL: String,
    email: String,
    info: String,
    entries: [ObjectId],
    comments: [ObjectId],
    favorites: [ObjectId]
  });

module.exports = mongoose.model("User", userSchema);
