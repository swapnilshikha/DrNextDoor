const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  specialization: { type: String, required: true },
  profileImage: { type: String, required: true }, // Now required
  experience: { type: String, required: true },
  bioMessage: { type: String, required: true },
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;


