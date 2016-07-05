var express = require('express');
var router = express.Router();
var User = require('../models/user');
var SwimmingHole = require('../models/swimming_hole');
var Review = require('../models/review');

// PULL UP INDEX
router.get('/', function(req, res, next) {
  SwimmingHole.find({}, function(err, swimming_holes) {
    if (err) console.log(err);
    res.render('index', { title: 'SwimSpot Austin', swimming_holes: swimming_holes });
  });
});


// PULL UP PAGE FOR CREATING A NEW REVIEW ON A SPECIFIC SWIMMING HOLE
router.get('swimming_hole/:id/review/new', function(req, res, next) {
  res.render('review');
});


// PULL UP PAGE OF SPECIFIC SWIMMING HOLE
router.get('swimming_hole/:id', function(req, res, next) {
  var swimmingHoleId = req.params.id;
  SwimmingHole.findOne( {_id: swimmingHoleId }, function(err, swimming_hole) {
    if (err) console.log(err);
    res.render('swimming_hole', { swimming_hole: swimming_hole });
  });
});


// CREATE A NEW REVIEW AND SAVE TO DATABASE
router.post('swimming_hole/:id/review/new', function(req, res, next) {
// create review
  var review = new Review({
    username: req.body.username,
    review: req.body.review
  });


// SAVE REVIEW TO DATABASE AND REDIRECT
  Review.save(function(err, review) {
    if (err) console.log(err);
    res.redirect('/:id');
  });
});


// // UPDATE A REVIEW AND SAVE TO DATABASE
router.patch('/:id', function(req, res, next) {
  Review.findByIdAndUpdate(req.params.id, req.body, function(err, review){
    if (err) console.log(err);
    res.redirect('swimming_hole/' + req.params.id);
  })
});


// // DELETE A REVIEW AND SAVE TO DATABASE
router.delete('/:id', function(req, res, next) {
  Review.findByIdAndRemove(req.params.id, req.body, function(err, review){
    if (err) console.log(err);
    res.redirect('index');
  })
});


module.exports = router;
