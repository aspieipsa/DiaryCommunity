import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

// NESTED in Identity

const DiarySchema = new mongoose.Schema({
  //_id: ObjectId,
  title: String,
  epigraph: String,
  image: String,
});

export default DiarySchema;
