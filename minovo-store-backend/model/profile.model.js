const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  _id: String,
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  status: {
    type: Boolean,
  },
  isSeller: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Profile', profileSchema);
