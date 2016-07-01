var express = require('express');
var router = express.Router();
var User = require('../models/user');
var SwimmingHole = require('../models/swimming_hole');
var Review = require('../models/review');

// PULL UP INDEX
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// PULL UP PAGE FOR CREATING A NEW REVIEW ON A SPECIFIC SWIMMING HOLE
router.get('/:id/new', function(req, res, next) {

});


// PULL UP PAGE OF SPECIFIC SWIMMING HOLE
router.get('/:id', function(req, res, next) {

});


// PULL UP PAGE FOR EDITING A REVIEW OF SPECIFIC SWIMMING HOLE
router.get('/:id/edit', function(req, res, next) {

});


// CREATE A NEW REVIEW AND SAVE TO DATABASE
router.post('/:id/new', function(req, res, next) {

});


// UPDATE A REVIEW AND SAVE TO DATABASE
router.patch('/:id', function(req, res, next) {

});


// DELETE A REVIEW AND SAVE TO DATABASE
router.delete('/:id', function(req, res, next) {

});


module.exports = router;
