import mongoose from 'mongoose';
import moment from 'moment';
const ObjectId = mongoose.Schema.Types.ObjectId;
import AuthorSchema from './AuthorSchema';

// NESTED in Entry

const CommentSchema = new mongoose.Schema(
  {
    //_id: ObjectId,
    author: AuthorSchema,
    body: String,
  },
  { timestamps: true }
);

/* from Mongoose docs:
Subdocuments' pre('save') and pre('validate') middleware execute before the top-level
document's pre('save') but after the top-level document's pre('validate') middleware.
This is because validating before save() is actually a piece of built-in middleware.
*/

/*
CommentSchema.pre('save', function(next, done) {
  // does not work, req is not defined here
  let authorID = req.user.currentID;
  if (!this.canEdit(authorID)) {
    var err = new Error('Editing time ended');
    next(err);
  } else {
    next();
  }
});*/

CommentSchema.pre('remove', function(next) {
  if (!this.canDelete(req.user.identities[0]._id)) {
    var err = new Error('Not allowed to remove');
    next(err);
  } else {
    next();
  }
});

CommentSchema.methods.canEdit = function(identityID, diaryID) {
  if (!this.author.authorID) return 'guest comments cannot be edited';

  if (this.author.authorID.toString() !== identityID.toString()) return 'only can edit own comments';
  // always can edit own comments in own diaries
  if (this.author.authorID.toString() === diaryID.toString()) return null;
  // in other diaries can edit own comments for a limited time
  if (moment().diff(this.createdAt, 'minutes') < Constants.EDIT_COMMENT_LIMIT_MINUTES) return null;
  return 'Editing time limit expired';
};

CommentSchema.methods.canDelete = function(identityID, diaryID) {
  // can always delete comments in own diary
  if (identityID === diaryID) return null;
  // can always delete own comments
  if (this.author.authorID && this.author.authorID.toString() === identityID.toString()) return null;
  return 'Not allowed to delete this comment';
};

export default CommentSchema;
