import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DrDetailsAdmin = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctors = async () => {
          try {
            const res = await axios.get('/api/doctors/all');
            setDoctors(res.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchDoctors();
      }, []);
    
      const handleAccept = (id) => {
        // You can call an API to update status
        alert(`Doctor ${id} accepted`);
      };
    
      const handleDecline = (id) => {
        // You can call an API to delete/decline the doctor
        alert(`Doctor ${id} declined`);
      };

  return (
    <>
      <div>
      <h2>Registered Doctors</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor._id}>
            {doctor.name} - {doctor.specialty}
            <button onClick={() => setSelectedDoctor(doctor)}>See Details</button>
          </li>
        ))}
      </ul>

      {selectedDoctor && (
        <div style={{ marginTop: '20px', border: '1px solid black', padding: '10px' }}>
          <h3>Doctor Details</h3>
          <p><strong>Name:</strong> {selectedDoctor.name}</p>
          <p><strong>Email:</strong> {selectedDoctor.email}</p>
          <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>

          <button onClick={() => handleAccept(selectedDoctor._id)}>Accept</button>
          <button onClick={() => handleDecline(selectedDoctor._id)}>Decline</button>
        </div>
      )}
    </div>
    </>
  )
}

export default DrDetailsAdmin
