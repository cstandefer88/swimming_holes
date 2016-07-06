var mongoose = require('mongoose');
var Review = require('../models/review');


var swimmingHoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  hours: { type: String, required: true },
  petFriendly: { type: Boolean, required: true },
  foodBeverage: { type: Boolean, required: true },
  price: { type: String, required: true },
  summary: { type: String, required: true },
  imageUrl: { type: String, required: true },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

var SwimmingHole = mongoose.model('swimming_holes', swimmingHoleSchema);

module.exports = SwimmingHole;
