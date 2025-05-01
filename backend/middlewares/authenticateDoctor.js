// /middleware/authMiddleware.js
// /middleware/authenticateToken.js
// middleware/authenticateToken.js

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];  // Extract token from Authorization header
  if (!token) {
    return res.status(401).json({ msg: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token
    req.user = decoded.doctor;  // Assuming the token contains the doctor's ID as 'doctor'
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Invalid token' });
  }
};

module.exports = authenticateToken;



