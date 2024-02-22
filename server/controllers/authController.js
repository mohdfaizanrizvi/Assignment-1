const passport = require('../config/passport');
const jwt = require('jsonwebtoken');

exports.facebookLogin = passport.authenticate('facebook', { scope: ['email'] });

exports.facebookCallback = passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
    try {
        // If authentication is successful, generate JWT token
        const user = req.user; // User object obtained from Passport.js authentication
        const payload = {
            user: {
                id: user.id
                // Add other user data as needed
            }
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Redirect the user to the dashboard with the JWT token appended as a query parameter
        res.redirect(`/dashboard?token=${token}`);
    } catch (error) {
        // If an error occurs, redirect the user to the login page with an error message
        res.redirect('/login?error=authentication_failed');
    }
};
