let mongoose = require("mongoose"),
  ObjectId = mongoose.Schema.Types.ObjectId,
  entrySchema = new mongoose.Schema({
    entryID: ObjectId,
    authorID: ObjectId,
    title: String,
    body: String,
    comments: [ObjectId]
  });

module.exports = mongoose.model("Entry", entrySchema);
