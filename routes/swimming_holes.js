var express = require('express');
var router = express.Router();
var SwimmingHole = require('../models/swimming_hole');
var Review = require('../models/review');
var mongoose = require('mongoose');
var methodOverride = require('method-override');


// PULL UP PAGE OF SPECIFIC SWIMMING HOLE
router.get('/:id', function(req, res, next) {
  var swimmingHoleId = req.params.id;
  SwimmingHole.findById(swimmingHoleId, function(err, swimmingHole) {
    if (err) console.log(err);
    var reviewIds = swimmingHole.reviews.map(function(reviewId) {
      return mongoose.Types.ObjectId(reviewId);
    });
    Review.find({
      '_id': { $in: reviewIds }
    }, function(err, reviews) {
      if (err) console.log(err);
      console.log(reviews);
    res.render('swimming_hole', { swimmingHole: swimmingHole, reviews: reviews });
  });
});
});


// CREATE A NEW REVIEW AND SAVE TO DATABASES
router.post('/:id/reviews', function(req, res, next) {
  var review = new Review({
    review: req.body.review
  });

  review.save(function(err, review) {
    if (err) console.log(err);
    var id = req.params.id
    SwimmingHole.findById( id, function(err, swimmingHole) {
      if (err) console.log(err);
      console.log(swimmingHole)
      swimmingHole.reviews.push(review);
      swimmingHole.save(function(err, swimmingHole) {
        res.redirect('/swimming_holes/' + req.params.id);
      });
    });
  });
});


// // UPDATE A REVIEW AND SAVE TO DATABASE
router.patch('/:id', function(req, res, next) {
  Review.findByIdAndUpdate(req.params.id, req.body, function(err, review){
    if (err) console.log(err);
    res.redirect('/swimming_holes/' + req.params.id);
  })
});


// // DELETE A REVIEW AND SAVE TO DATABASE
router.delete('/:id', function(req, res, next) {
  Review.findByIdAndRemove(req.params.id, req.body, function(err, review){
    if (err) console.log(err);
    res.redirect('/swimming_holes/' + req.params.id);
  })
});


module.exports = router;
