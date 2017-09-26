let mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose"),
  ObjectId = mongoose.Schema.Types.ObjectId,
  userSchema = new mongoose.Schema({
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
