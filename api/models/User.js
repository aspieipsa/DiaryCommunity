let mongoose = require("mongoose"),
  ObjectId = mongoose.Schema.Types.ObjectId,
  userSchema = new mongoose.Schema({
    userID: ObjectId,
    name: {
      type: String,
      required: "Name is required"
    },
    customURL: {
      type: String,
      required: "Custom url is required"
    },
    email: {
      type: String,
      required: "Email is required"
    },
    info: String,
    entries: [ObjectId],
    comments: [ObjectId],
    favorites: [ObjectId],
    Created_date: {
      type: Date,
      default: Date.now
    }
  });

module.exports = mongoose.model("User", userSchema);
