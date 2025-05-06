const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const path=require('path')
const doctorRoutes = require('./routes/doctorRoutes'); 
const patientRouter = require('./routes/Patient.router.js');
const app=express()
const PORT=process.env.PORT || 5000;
dotenv.config();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // handles form-urlencoded

app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/doctors', doctorRoutes); //handles register, login, profile, all doctors
app.use('/patient',patientRouter)

app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`)
    connectDB();
})
