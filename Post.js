const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    creationDate: {type: Date, default: Date.now },
    title: String,
    content: String
  });

  module.exports = mongoose.model('Post', PostSchema);