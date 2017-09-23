let mongoose = require("mongoose"),
  ObjectId = mongoose.Schema.Types.ObjectId,
  commentSchema = new mongoose.Schema({
    commentID: ObjectId,
    entryID: ObjectId,
    authorID: ObjectId,
    body: String
  });

module.exports = mongoose.model("Comment", commentSchema);
