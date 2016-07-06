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
    //console.log(swimmingHoleId);
    res.render('swimming_hole', { swimming_hole: swimming_hole});
  });
});


// CREATE A NEW REVIEW AND SAVE TO DATABASE
router.post('/:id', function(req, res, next) {
  var id = req.params.id;
  var review = new Review({
    username: req.body.username,
    review: req.body.review
  });
  console.log("The id of this page is" + id);
  review.save(function(err, review) {
    if (err) console.log(err);
    console.log("The id of this page is" + id);
    res.redirect('/' + id);
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
