const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  specialization: { type: String, required: true },
<<<<<<< HEAD
  profileImage: { type: String, required: true }, // Now required
  experience: { type: String, required: true },
  bioMessage: { type: String, required: true },
  approved:{type:String,default:"not approved"},
=======
  degree: { type: String, required: true },
  experience: { type: String, required: true },
  bioMessage: { type: String, required: true },
  profileImage: { type: String }, // Optional, for profile picture
  experience: { type: String, required: true },
  bioMessage: { type: String, required: true },
  approved:{type:String,default:"not approved"},
  appointments:{type:Object,default:{}},
  slots:{type:Object,default:{"morning":"6-9","evening":"5-6"}}
>>>>>>> c1a654ae0eb76c3639882c99838b87b869aedaaa
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;


