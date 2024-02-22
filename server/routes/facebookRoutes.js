const express = require('express');
const router = express.Router();
const facebookController = require('../controllers/facebookController');

// Endpoint to handle incoming messenger webhook events
router.post('/webhook', facebookController.handleWebhook);

module.exports = router;
