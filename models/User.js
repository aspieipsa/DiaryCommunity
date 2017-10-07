const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
  {
    //_id: ObjectId,
    username: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
      index: true
    },
    password: String,
    uri: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+/, "is invalid"],
      unique: true,
      index: true
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"]
    },
    info: String,
    entryIDs: [ObjectId],
    commentIDs: [ObjectId],
    favoriteIDs: [ObjectId]
  },
  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
