// requires  ======================== 
var Express = require('express');
var App = Express();
var BodyParser = require('body-parser');
var Mongoose = rquire('mongoose');
var Passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var UserCtrl = require('/library/controllers/usercontroller');

// port stuff ========================

var port = 8015;
var mongoURI = 'localhost:27017/personal-project';

// middleware  =======================

App.use(Express.static(__dirname + '/public'));
App.use(BodyParser.json()); 

// login =============================


Passport.use(new GoogleStrategy({
    clientID: '15633526252-k41h1n8kai6ol4f45q6jf6ita2t4j6hp.apps.googleusercontent.com',
    clientSecret: 'TFBdCid8fjizjWK-HRkbfqIO',
    callbackURL: "http://127.0.0.1:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

//authentications ====================

App.get('/auth/google', passport.authenticate('google'));

App.get('/auth/google/callback', passport.authenticate('google', 
	{ failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

// connecting ========================

Mongoose.connect(mongoURI, function(){
	console.log('Connected to MongoDB at: ' + mongoURI);
})


App.listen(port, function () {
	console.log('Listening on port: ' + port);
});