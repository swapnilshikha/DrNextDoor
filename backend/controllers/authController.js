const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');

// Register a new doctor
const registerDoctor = async (req, res) => {
  const { name, email, password, specialty } = req.body;

  try {
    let doctor = await Doctor.findOne({ email });
    if (doctor) {
      return res.status(400).json({ msg: 'Doctor already exists' });
    }

    doctor = new Doctor({
      name,
      email,
      password,
      specialty,
    });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    doctor.password = await bcrypt.hash(password, salt);

    await doctor.save();

    // Create JWT token
    const payload = {
      doctor: {
        id: doctor.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Login doctor
const loginDoctor = async (req, res) => {
  const { email, password } = req.body;

  try {
    let doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Create JWT token
    const payload = {
      doctor: {
        id: doctor.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { registerDoctor, loginDoctor };
