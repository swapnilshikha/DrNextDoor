// backend/models/appointmentModel.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  date: String,
  time: String,
  status: {
    type: String,
    default: 'Scheduled',
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
