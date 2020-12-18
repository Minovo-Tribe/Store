const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sideMenuSchema = new Schema({
  heading: {
    type: String,
    required: true,
  },
  list: [{ heading: String, list: [{ heading: String, list: Array }] }],
});

module.exports = mongoose.model('SideMenu', sideMenuSchema);
