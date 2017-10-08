import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const entrySchema = new mongoose.Schema(
  {
    //_id: ObjectId,
    _authorID: { type: ObjectId, ref: 'User' },
    title: String,
    body: String,
    commentIDs: [ObjectId],
  },
  { timestamps: true }
);

export default mongoose.model('Entry', entrySchema);
