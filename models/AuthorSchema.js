import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

// NESTED in entries and comments

const AuthorSchema = new mongoose.Schema({
  //_id: ObjectId,
  id: { type: ObjectId, ref: 'Identity' },
  name: String,
  uri: String, // assumes that all identity uris, old and new, are stored in an array on the identity. Indexes fine. Old comments and entries will have old uris but it will work the same.
  signature: String,
  image: String, // avatar used for this entry/comment
});

export default AuthorSchema;