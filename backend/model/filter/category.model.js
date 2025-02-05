const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: {
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
});

module.exports = mongoose.model('Category', categorySchema);
