const express = require('express');
const {
  getAllDoctors,
  getDrById,
  acceptDoctor,
  declineDoctor,
  addDoctor,
  deleteDoctor,
  adminlogin
} = require('../controllers/admin.controller.js');

const upload = require('../middlewares/AdminMulter.js'); // use if image upload is needed

const adminRouter = express.Router();

// Admin login
adminRouter.post('/login', adminlogin);

// Add a new doctor (use 'upload.single' if image is included)
adminRouter.post('/addDoctor', upload.single('profileImage'), addDoctor)


// Get all doctors
adminRouter.get('/allDoctors', getAllDoctors);

// Get doctor by ID
adminRouter.get('/doctors/:id', getDrById);

// Accept or Decline doctor
adminRouter.put('/accept/:id', acceptDoctor);
adminRouter.delete('/decline/:id', declineDoctor);

// // Update a doctor (use 'upload.single' if updating image)
// adminRouter.put('/update/:id', upload.single('image'), updateDr);

// Delete a doctor
adminRouter.delete('/delete/:id', deleteDoctor);

module.exports = adminRouter;
