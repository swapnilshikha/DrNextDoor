const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const doctorRoutes = require('./routes/doctorRoutes'); 
const patientRouter = require('./routes/Patient.router.js');
const adminRouter = require('./routes/AdminRoutes.js');

const questionRoutes = require('./routes/questionRoute');
const app=express()
const PORT=process.env.PORT || 5000;
dotenv.config();



// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API endpoints
app.use('/admin', adminRouter);         // e.g., /api/admin/all
app.use('/api/doctors', doctorRoutes);      // e.g., /api/doctors/register
app.use('/patient', patientRouter);    // Changed to /api/patients for consistency

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

//for image uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Routes
app.use('/api/doctors', doctorRoutes); //handles register, login, profile, all doctors
app.use('/patient',patientRouter)
app.use('/api/questions', questionRoutes);
const appointmentRoutes = require('./routes/appointment-routes');
app.use('/api/appointments', appointmentRoutes);



app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`)
    connectDB();
})



