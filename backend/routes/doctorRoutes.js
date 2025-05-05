const express = require('express');
const { registerDoctor, loginDoctor } = require('../controllers/doctorController.js');
const authenticateToken = require('../middlewares/authenticateDoctor.js');
const Doctor = require('../models/Doctor');

const doctorRouter = express.Router();
const {upload,uploadDoctor}= require('../middlewares/multer.middleware.js');

// Register doctor
doctorRouter.post('/register', uploadDoctor.single('profileImage'), registerDoctor);

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
// Update Doctor Profile by ID (Protected)
doctorRouter.put('/:id', uploadDoctor.single('profileImage'), async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);  // Use URL param

    if (!doctor) {
      return res.status(404).send({ message: 'Doctor not found' });
    }

    const { name, specialization, experience, bioMessage } = req.body;

    if (name) doctor.name = name;
    if (specialization) doctor.specialization = specialization;
    if (experience) doctor.experience = experience;
    if (bioMessage) doctor.bioMessage = bioMessage;

    // Update profile image if uploaded
    if (req.file) {
      doctor.profileImage = req.file.filename;
    }

    await doctor.save();
    res.status(200).send(doctor);

  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Server Error' });
  }
});
// Get Doctor by ID (Public)
doctorRouter.get('/:id', async (req, res) => {
  try {
    const doctorId = req.params.id;  // Extract doctor ID from URL params
    const doctor = await Doctor.findById(doctorId).select('-password'); // Exclude password from the result
    
    if (!doctor) {
      return res.status(404).send({ message: 'Doctor not found' });
    }

    res.status(200).send(doctor);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Server Error' });
  }
});


module.exports = doctorRouter;



