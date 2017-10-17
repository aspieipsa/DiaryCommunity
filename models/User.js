import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    //_id: ObjectId,
    password: String,
    email: {
      unique: true,
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    identities: [{ type: ObjectId, ref: 'Identity' }],
    currentId: { type: Number, default: 0 }, // current identity index
  },
  { timestamps: true }
);
UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });
UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  findByUsername: (model, queryParameters) => {
    return model.findOne(queryParameters, 'email identities currentId').populate('identities', 'name uri');
  },
});

export default mongoose.model('User', UserSchema);
