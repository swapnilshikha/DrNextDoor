const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const Doctor = require('../models/Doctor');

// Register a new doctor
const registerDoctor = async (req, res) => {
  try {
    const { name, email, password, specialty } = req.body;

    // Input validation
    if (!name || !email || !password || !specialty) {
      return res.status(400).send({ message: "Please enter all required details" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).send({ message: "Please enter a valid email address" });
    }

    if (password.length < 8) {
      return res.status(400).send({ message: "Password must be at least 8 characters long" });
    }

    let doctor = await Doctor.findOne({ email });
    if (doctor) {
      return res.status(400).send({ message: 'Doctor already exists' });
    }

    doctor = new Doctor({
      name,
      email,
      password,
      specialty,
    });

    // Hash the password
    const salt = await bcrypt.genSalt(10);  //add radomvalues to the salt
    doctor.password = await bcrypt.hash(password, salt); //hash the password and make it unreadable

    await doctor.save();

    // Generate JWT Token
    const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).send({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Server Error' });
  }
};

// Login doctor
const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: "Please enter all required fields" });
    }

    let doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(400).send({ message: "Doctor does not exist" });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid Credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).send({ token, doctorId: doctor._id });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Server Error' });
  }
};

module.exports = { registerDoctor, loginDoctor };
