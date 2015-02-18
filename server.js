// requires  ======================== 
var Express = require('express');
var App = Express();
var BodyParser = require('body-parser');
var Mongoose = require('mongoose');
var Passport = require('passport');
var Session  = require('express-session');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// require library

var userCtrl = require('./library/controllers/usersController');

// port stuff ========================

var port = 8015;
var mongoURI = 'localhost:27017/personal-project';

// middleware  =======================
Passport.serializeUser(function(user, done){
  done(null, user);
});

Passport.deserializeUser(function(obj, done){
    done(null, obj);
});


App.use(Express.static(__dirname + '/public'));
App.use(BodyParser.json()); 
App.use(Session({ secret: 'thisismysecret' }));
App.use(Passport.initialize());
App.use(Passport.session());

// login =============================


Passport.use(new GoogleStrategy({
    clientID: '15633526252-k41h1n8kai6ol4f45q6jf6ita2t4j6hp.apps.googleusercontent.com',
    clientSecret: 'TFBdCid8fjizjWK-HRkbfqIO',
    callbackURL: "http://127.0.0.1:" + port + "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    userCtrl.findOrCreate(profile).then( function (user) {
      return done(null, user);
    },function(err){
      return done(err, profile);
    });
  }
));

//authentications ====================

App.get('/auth/google', Passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'}));

App.get('/auth/google/callback', Passport.authenticate('google', 
	{ failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

App.get('/auth/user', function(req, res) {
  return res.json(req.user);
})

// hookins ===========================




// connecting ========================

Mongoose.connect(mongoURI, function(){
	console.log('Connected to MongoDB at: ' + mongoURI);
})


App.listen(port, function () {
	console.log('Listening on port: ' + port);
});