var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  review: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
});

var Review = mongoose.model('reviews', reviewSchema);

module.exports = Review;
