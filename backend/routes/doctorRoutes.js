// backend/routes/doctorsRoutes.js

const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.user.id).select('-password');
    if (!doctor) {
      return res.status(404).json({ msg: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find().select('-password');
    res.json(doctors);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


