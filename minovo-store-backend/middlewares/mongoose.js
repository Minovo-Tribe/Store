const mongoose = require('mongoose');
const user = 'debasish';
const key = 'Vp4JtFiFrRXoEd2t';
const DB = 'minovo';
const uri = `mongodb+srv://${user}:${key}@cluster0.fpqxi.mongodb.net/${DB}?retryWrites=true&w=majority`;

exports.connect = (callback) => {
  return mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(callback)
    .catch((err) => {
      console.log(err);
    });
};
