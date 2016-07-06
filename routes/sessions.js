var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');


/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('sessions/new', { message: req.flash('error') });
});

/* POST new session home page. */
router.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/sessions/new',
  failureFlash: true
}));

/* Logout (THIS SHOULD REALLY BE A DELETE METHOD). */
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
