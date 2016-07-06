var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  review: { type: String, required: true }
});

var Review = mongoose.model('reviews', reviewSchema);

module.exports = Review;
