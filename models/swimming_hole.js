var mongoose = require('mongoose');

var swimmingHoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  hours: { type: String, required: true },
  petFriendly: { type: Boolean, required: true },
  foodBeverage: { type: Boolean, required: true },
  Price: { type: String, required: true },
  summary: { type: String, required: true }
})

var SwimmingHole = mongoose.model('SwimmingHole', swimmingHoleSchema);

module.exports = SwimmingHole;
