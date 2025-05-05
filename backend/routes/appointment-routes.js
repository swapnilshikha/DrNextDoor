const express = require('express');
const router = express.Router();
const Appointment = require('../models/doctor-appontment');
const authenticateToken = require('../middlewares/authenticateDoctor'); 

router.get('/', authenticateToken, async (req, res) => {
  try {
    // Assuming doctor ID is stored in req.user
    const appointments = await Appointment.find({ doctorId: req.user });
    res.status(200).json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});

module.exports = router;
