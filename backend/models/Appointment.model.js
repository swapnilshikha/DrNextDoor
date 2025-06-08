// backend/models/appointmentModel.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Patients',
    required: true,
  },
  date: String,
  slot: String,
  status: {
    type: String,
    default: 'Scheduled',
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
