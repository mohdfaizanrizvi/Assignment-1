const express = require('express');
const router = express.Router();
const { facebookLogin, facebookCallback } = require('../controllers/authController');

router.get('/facebook', facebookLogin);
router.get('/facebook/callback', facebookCallback);

module.exports = router;
