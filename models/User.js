const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema = new mongoose.Schema({
  //_id: ObjectId,
  username: String,
  password: String,
  customURL: String,
  email: String,
  info: String,
  entryIDs: [ObjectId],
  commentIDs: [ObjectId],
  favoriteIDs: [ObjectId]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
