import React from 'react';
import doctorImg from './../assets/doctor.jpeg'

const Header = () => {
  return (
    <>
  <div className="d-flex justify-content-between align-items-center px-5 py-4 rounded-pill bg-dark text-white" style={{ height: '400px' }}>
    <div className="d-flex justify-content-between align-items-center px-5 py-4 rounded-pill bg-dark text-white bg-light" style={{ height: '400px' }}>
      <div className="text-start">
        <h2 className="fw-bold">Book Appointment<br />With Trusted Doctors</h2>
        <p className="text-white-50" style={{ fontSize: '20px' }}>
          Simply browse through our extensive list of trusted doctors,<br />
          schedule your appointment hassle-free.
        </p>
      </div>

      <div>
        <img
          src={doctorImg}
          alt=""
          style={{ maxWidth: '800px', height: 'auto', borderRadius: '150px' }}
        />
      </div>
    </div>
    </>
  );
};

export default Header;
