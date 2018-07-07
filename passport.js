const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});

//accessing the users model in a var User
const User = mongoose.model('User');

passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    }, (accessToken, refreshToken, profile, done) => {
          User.findOne({ googleID: profile.id})
          .then((existingUser) => {
              if(existingUser) {
                  done(null, existingUser);
              }
              else {
                //create new model instance of user using the user's profile
                new User({
                    googleID: profile.id
                })
                .save()
                .then(user => {
                    done(null, user);
                });
              }
          })

        
    })
);