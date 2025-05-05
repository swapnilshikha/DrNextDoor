import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const token = localStorage.getItem('doctorToken'); // or wherever you stored the JWT

        const profileRes = await axios.get('/api/doctors/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const appointmentsRes = await axios.get('/api/appointments', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProfile(profileRes.data);
        setAppointments(appointmentsRes.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);
}
export default Appointments;
