var mongoose = require('mongoose');
var User = require('../models/user');

var reviewSchema = new mongoose.Schema({
  review: { type: String, required: true },
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
});

var Review = mongoose.model('reviews', reviewSchema);

module.exports = Review;
