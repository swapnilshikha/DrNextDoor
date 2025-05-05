const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  specialization: { type: String, required: true },
  degree: { type: String, required: true },
  experience: { type: String, required: true },
  bioMessage: { type: String, required: true },
  status : { type: String, default: 'Pending' }, // Pending, Approved, Rejected
  profileImage: { type: String }, // Optional, for profile picture
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;


