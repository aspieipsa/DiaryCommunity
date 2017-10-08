import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const commentSchema = new mongoose.Schema(
  {
    //_id: ObjectId,
    _authorID: { type: ObjectId, ref: 'User' },
    _entryID: { type: ObjectId, ref: 'Entry' },
    title: String,
    body: String,
  },
  { timestamps: true }
);

export default mongoose.model('Comment', commentSchema);
