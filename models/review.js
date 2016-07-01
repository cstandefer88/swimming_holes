var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  review: { type: String, required: true }
});

module.exports = mongoose.model();
