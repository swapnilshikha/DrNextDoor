const express = require('express');
const { registerDoctor, loginDoctor } = require('../controllers/authController');

const router = express.Router();

// Register doctor
router.post('/register', registerDoctor);

// Login doctor
router.post('/login', loginDoctor);

module.exports = router;
