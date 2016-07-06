var express = require('express');
var router = express.Router();
var SwimmingHole = require('../models/swimming_hole');
var Review = require('../models/review');


// PULL UP PAGE OF SPECIFIC SWIMMING HOLE
router.get('/:id', function(req, res, next) {
  var swimmingHoleId = req.params.id;
  SwimmingHole.findById(swimmingHoleId, function(err, swimming_hole) {
    if (err) console.log(err);
    // get review id
    // get associated review
    res.render('swimming_hole', { swimming_hole: swimming_hole });
  });
});


// CREATE A NEW REVIEW AND SAVE TO DATABASE
router.post('/:id', function(req, res, next) {
  var id = req.params.id;
  var review = new Review({
    username: req.body.username,
    review: req.body.review
  });
  review.save(function(err, review) {
    if (err) console.log(err);
    // get swimming hole out of database
    // insert review id into swimming hole reviews array
    // save the swimming hole
    res.redirect('/swimming_holes/' + req.params.id);
  });
});

// // UPDATE A REVIEW AND SAVE TO DATABASE
router.patch('/reviews/:id', function(req, res, next) {
  Review.findByIdAndUpdate(req.params.id, req.body, function(err, review){
    if (err) console.log(err);
    res.redirect('/swimming_holes/' + req.params.id);
  })
});


// // DELETE A REVIEW AND SAVE TO DATABASE
router.delete('/reviews/:id', function(req, res, next) {
  Review.findByIdAndRemove(req.params.id, req.body, function(err, review){
    if (err) console.log(err);
    res.redirect('/swimming_holes/' + req.params.id);
  })
});


module.exports = router;
