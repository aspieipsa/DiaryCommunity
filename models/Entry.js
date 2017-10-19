import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;
import AuthorSchema from './AuthorSchema';
import CommentSchema from './CommentSchema';

const EntrySchema = new mongoose.Schema(
  {
    //_id: ObjectId,
    d_id: { type: ObjectId, ref: 'Identity', index: true }, // where the entry is. Use this for queries!
    d_uri: String, // use it for pretty links on frontend, not lookups
    author: AuthorSchema, // this is also for frontend display, not lookups
    title: String,
    body: String,
    comments: [CommentSchema], // one can have hell of a ton comments for 16 MB, so this is gonna be fine for the time being
    c_count: Number, // maintain this to avoid retrieving the whole array when you don't need it
  },
  { timestamps: true }
);

EntrySchema.methods.identityCanEditEntries = function(identityID) {
  // the author can edit their entries
  if (this.author.authorID.toString() === identityID.toString()) {
    return true;
    // the community can always edit their entries
  } else if (this.d_id.toString === identityID.toString()) {
    return true;
  } else {
    // community rights checks - need specs
  }
  return false;
};

/*
EntrySchema.pre('save', function(next, other, els) {
  var self = this;
  // do some modifications to the model instance
  next();
});
*/

mongoose.model('Entry', EntrySchema);
