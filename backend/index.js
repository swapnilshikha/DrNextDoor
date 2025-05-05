const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const doctorRoutes = require('./routes/doctorRoutes'); 
const patientRouter = require('./routes/Patient.router.js');
const adminRouter = require('./routes/AdminRoutes.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API endpoints
app.use('/api/admin', adminRouter);         // e.g., /api/admin/all
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

