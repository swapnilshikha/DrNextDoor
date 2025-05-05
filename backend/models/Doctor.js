const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  specialization: { type: String, required: true },
<<<<<<< HEAD
  degree: { type: String, required: true },
  experience: { type: String, required: true },
  bioMessage: { type: String, required: true },
  status : { type: String, default: 'Pending' }, // Pending, Approved, Rejected
  profileImage: { type: String }, // Optional, for profile picture
=======
  profileImage: { type: String, required: true }, // Now required
  experience: { type: String, required: true },
  bioMessage: { type: String, required: true },
  approved:{type:String,default:"not approved"},
>>>>>>> 7ded14f65c096026e7878b865a2a4a24aa94bdd5
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;


