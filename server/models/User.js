let mongoose = require("mongoose"),
  ObjectId = mongoose.Schema.Types.ObjectId,
  userSchema = new mongoose.Schema({
    _id: ObjectId,
    name: String,
    customURL: String,
    email: String,
    info: String,
    entryIDs: [ObjectId],
    commentIDs: [ObjectId],
    favoriteIDs: [ObjectId]
  });

module.exports = mongoose.model("User", userSchema);
