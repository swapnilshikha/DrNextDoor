const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes'); 

dotenv.config();
const cors=require('cors');
const patientRouter = require('./routes/Patient.router.js');


// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes); 
app.use('/patient',patientRouter)

app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`)
    dbConnect();
})
