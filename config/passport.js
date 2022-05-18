const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

// new code below
passport.use(
    new GoogleStrategy(
        // Configuration object
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
            passReqToCallback: true,
        },
        // The verify callback function
        function(accessToken, refreshToken, profile, cb) {
            console.log('HERE');
            User.findOne({ googleId: profile.id }).then(async function(user) {
                if (user) return cb(null, user);
                try {
                    user = await User.create({
                        name: profile.displayName,
                        googleId: profile.id,
                        email: profile.emails[0].value,
                        avatar: profile.photos[0].value,
                    })
                    return cb(null, user);
                }   catch (err) {
                    return cb(err);
                }
            })
        }
    )
);

passport.serializeUser(function(user, cb) {
    cb(null, user._id);
});

passport.deserializeUser(function(userId, cb) {
    User.findById(userId).then(function(user) {
        cb(null, user);
    });
});