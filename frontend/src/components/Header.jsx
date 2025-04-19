import React from 'react';
import doctorImg from './../assets/doctors.jpg'

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-5 py-4 bg-light">
      <div className="text-start">
        <h2 className="fw-bold">Book Appointment<br />With Trusted Doctors</h2>
        <p className="text-muted">
          Simply browse through our extensive list of trusted doctors,<br />
          schedule your appointment hassle-free.
        </p>
      </div>

      <div>
        <img src={doctorImg} alt="Doctors illustration" style={{ maxWidth: '400px', height: 'auto' }} />
      </div>
    </div>
  );
};

export default Header;
