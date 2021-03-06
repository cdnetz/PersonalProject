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
var googlePlacesCtrl = require('./library/controllers/googlePlacesController');

// port stuff ========================

var port = process.env.EXPRESS_PORT || 80;
var mongoURI = 'localhost:27017/personal-project';
var googleCB =  "http://www.timewastin.net/auth/google/callback" 


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
    clientID: '15633526252-c3nfstdsh0imttecgl795bpff2a60s4n.apps.googleusercontent.com',
    clientSecret: 'Y17gMgiB_AL6yTDCHFAFS0Gc',
    callbackURL: googleCB
  },
  function(accessToken, refreshToken, profile, done) {
    userCtrl.findOrCreate(profile).then( function (user) {
      return done(null, user);
    },function(err){
      console.log(err);
      return done(err, profile);
    });
  }
));

//authentications ====================

App.get('/auth/google', Passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'}));

App.get('/auth/google/callback', Passport.authenticate('google', 
	{ failureRedirect: '/#/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/#/preferences');
});

App.get('/auth/user', function(req, res) {
  return res.json(req.user);
})

App.get('/auth/logout', function(req, res){
  req.logout();
  res.redirect('/');
  
});

App.post('/places/search', googlePlacesCtrl.search)



// hookins ===========================




// connecting ========================

Mongoose.connect(mongoURI, function(){
	console.log('Connected to MongoDB at: ' + mongoURI);
})


App.listen(port, function () {
 	console.log(process.env);
	console.log('Listening on port: ' + port);
});
