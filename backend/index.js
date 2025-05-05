const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const doctorRoutes = require('./routes/doctorRoutes'); 
const patientRouter = require('./routes/Patient.router.js');
const questionRoutes = require('./routes/questionRoute');
const app=express()
const PORT=process.env.PORT || 5000;
dotenv.config();
// Middleware
app.use(express.json());
app.use(cors());
//for image uploads
const path = require('path');
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



