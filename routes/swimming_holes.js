var express = require('express');
var router = express.Router();
var User = require('../models/user');
var SwimmingHole = require('../models/swimming_hole');
var Review = require('../models/review');


// PULL UP PAGE OF SPECIFIC SWIMMING HOLE
router.get('/:id', function(req, res, next) {
  var swimmingHoleId = req.params.id;
  SwimmingHole.findById(swimmingHoleId, function(err, swimming_hole) {
    if (err) console.log(err);
    console.log(swimmingHoleId);
    res.render('swimming_hole', { swimming_hole: swimming_hole, reviews: reviews });
  });
});


// CREATE A NEW REVIEW AND SAVE TO DATABASE
router.post('/:id/reviews', function(req, res, next) {
// create review
  var review = new Review({
    username: req.body.username,
    review: req.body.review
  });
  Review.save(function(err, review) {
    if (err) console.log(err);
    res.redirect('/');
  });
});


// // UPDATE A REVIEW AND SAVE TO DATABASE
router.patch('/reviews/:id', function(req, res, next) {
  Review.findByIdAndUpdate(req.params.id, req.body, function(err, review){
    if (err) console.log(err);
    res.redirect('/');
  })
});


// // DELETE A REVIEW AND SAVE TO DATABASE
router.delete('/reviews/:id', function(req, res, next) {
  Review.findByIdAndRemove(req.params.id, req.body, function(err, review){
    if (err) console.log(err);
    res.redirect('/');
  })
});


module.exports = router;
