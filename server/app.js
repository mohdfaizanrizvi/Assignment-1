const express = require('express');
const connectDB = require('./config/database');
const passport = require('./config/facebook');
const authRoutes = require('./routes/authRoutes');
const facebookRoutes = require('./routes/facebookRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(passport.initialize());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/facebook', facebookRoutes);

module.exports = app;
