const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  brand: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('Brand', brandSchema);
