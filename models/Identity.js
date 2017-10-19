import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const ObjectId = mongoose.Schema.Types.ObjectId;
import DiarySchema from './DiarySchema';

const IdentitySchema = new mongoose.Schema(
  {
    //_id: ObjectId,
    name: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
      index: true,
    },
    // array of all uris ever taken
    uri: [
      {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+/, 'is invalid'],
        unique: true,
        index: true,
      },
    ],
    info: String,
    image: String,
    signature: String,
    diary: DiarySchema,
    favorites: [{ type: ObjectId, ref: 'Identity' }],
    readers: [{ type: ObjectId, ref: 'Identity' }],
  },
  { timestamps: true }
);

IdentitySchema.plugin(uniqueValidator, { message: 'is already taken.' });

IdentitySchema.methods.identityCanAddEntries = function(identityID) {
  if (this.community) {
    if (this.community.open || this.community.members.find(m => m.toString() === identityID.toString())) return true;
  } else {
    if (this._id.toString() === identityID.toString()) return true;
  }
  return false;
};

mongoose.model('Identity', IdentitySchema);
