import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserFavoriteSchema = new mongoose.Schema(
  {
    //_id: ObjectId,
    _favoriteID: { type: ObjectId, ref: 'User' }, // favorite user
    following: { type: Boolean, default: true }, // show in the feed or not
  },
  { timestamps: true }
);

export default UserFavoriteSchema;
