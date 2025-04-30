// pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        const res = await axios.get('/api/doctor/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setDoctor(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDoctorProfile();
  }, []);

  return (
    <div className="profile-container">
      <h2>Doctor Profile</h2>
      <div>
        <p><strong>Name:</strong> {doctor.name}</p>
        <p><strong>Specialty:</strong> {doctor.specialty}</p>
        <p><strong>Email:</strong> {doctor.email}</p>
        {/* You can add more fields as needed */}
      </div>
    </div>
  );
};

export default Profile;

