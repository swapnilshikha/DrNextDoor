const express = require('express');
const { registerDoctor, loginDoctor } = require('../controllers/doctorController.js');
const authenticateToken = require('../middlewares/authenticateDoctor.js');
const Doctor = require('../models/Doctor');

const doctorRouter = express.Router();

// Register doctor
doctorRouter.post('/register', registerDoctor);

// Login doctor
doctorRouter.post('/login', loginDoctor);

// Get Doctor Profile (Protected)
doctorRouter.get('/profile', authenticateToken, async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.user.id).select('-password');
    if (!doctor) {
      return res.status(404).send({ message: 'Doctor not found' });
    }
    res.status(200).send(doctor);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Server Error' });
  }
});

// Get all doctors (Public)
doctorRouter.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find().select('-password');
    res.status(200).send(doctors);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Server Error' });
  }
});

module.exports = doctorRouter;



