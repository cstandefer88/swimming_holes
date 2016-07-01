var express = require('express');
var router = express.Router();
var User = require('../models/user');
var SwimmingHole = require('../models/swimming_hole');
var Review = require('../models/review');

// PULL UP INDEX
router.get('/', function(req, res, next) {
  SwimmingHole.find({}, function(err, swimming_holes) {
    if (err) console.log(err);
    res.render('index', { title: 'SwimHole Austin', swimming_holes: swimming_holes });
  });
});


// // PULL UP PAGE FOR CREATING A NEW REVIEW ON A SPECIFIC SWIMMING HOLE
// router.get('/:id/new', function(req, res, next) {

// });


// PULL UP PAGE OF SPECIFIC SWIMMING HOLE
router.get('/:id', function(req, res, next) {
  var swimmingHoleId = req.params.id;
  SwimmingHole.findOne( {_id: swimmingHoleId }, function(err, swimming_hole) {
    if (err) console.log(err);
    res.render('/sessions/swimming_hole', { swimming_hole: swimming_hole });
  });
});


// // PULL UP PAGE FOR EDITING A REVIEW OF SPECIFIC SWIMMING HOLE
// router.get('/:id/edit', function(req, res, next) {

// });


// // CREATE A NEW REVIEW AND SAVE TO DATABASE
// router.post('/:id/new', function(req, res, next) {

// });


// // UPDATE A REVIEW AND SAVE TO DATABASE
// router.patch('/:id', function(req, res, next) {

// });


// // DELETE A REVIEW AND SAVE TO DATABASE
// router.delete('/:id', function(req, res, next) {

// });


module.exports = router;
