let mongoose = require("mongoose"),
  ObjectId = mongoose.Schema.Types.ObjectId,
  entrySchema = new mongoose.Schema({
    //_id: ObjectId,
    authorID: ObjectId,
    title: String,
    body: String,
    commentIDs: [ObjectId]
  });

module.exports = mongoose.model("Entry", entrySchema);
