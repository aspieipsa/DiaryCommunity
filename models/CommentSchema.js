import mongoose from 'mongoose';
import moment from 'moment';
const ObjectId = mongoose.Schema.Types.ObjectId;
import AuthorSchema from './AuthorSchema';

// NESTED in Entry

const CommentSchema = new mongoose.Schema(
  {
    //_id: ObjectId,
    author: [AuthorSchema],
    body: String,
  },
  { timestamps: true }
);

/* from Mongoose docs:
Subdocuments' pre('save') and pre('validate') middleware execute before the top-level
document's pre('save') but after the top-level document's pre('validate') middleware.
This is because validating before save() is actually a piece of built-in middleware.
*/

CommentSchema.pre('save', function(next, done) {
  console.log('PRE SAVE');
  let authorID = req.user.identities[0]._id;
  if (!this.canEdit(authorID)) {
    var err = new Error('Editing time ended');
    next(err);
  } else {
    next();
  }
});

CommentSchema.pre('remove', function(next) {
  if (!this.canDelete(req.user.identities[0]._id)) {
    var err = new Error('Not allowed to remove');
    next(err);
  } else {
    next();
  }
});

CommentSchema.methods.canEdit = function(authorID) {
  if (this.own) return true;
  if (authorID == this.author && moment().diff(this.createdAt, 'minutes') < 15) return true;
  return false;
};

CommentSchema.methods.canDelete = function(authorID) {
  if (this.own) return true;
  if (authorID === this.author) return true;
  return false;
};

export default CommentSchema;
