import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const ObjectId = mongoose.Schema.Types.ObjectId;

import UserFavorite from './UserFavorite';

const userSchema = new mongoose.Schema(
  {
    //_id: ObjectId,
    username: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
      index: true,
    },
    password: String,
    uri: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+/, 'is invalid'],
      unique: true,
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    info: String,
    favorites: [UserFavorite],
  },
  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', userSchema);
