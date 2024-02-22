const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const User = require('../models/User'); 

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: '/api/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'email']
},
async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if the user already exists in the database
        let user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
            // If the user does not exist, create a new user
            user = new User({
                email: profile.emails[0].value,
                displayName: profile.displayName
                // You can add other fields as needed
            });
            await user.save();
        }

        // Return user data
        done(null, user);
    } catch (error) {
        done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

module.exports = passport;
