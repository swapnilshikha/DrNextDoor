import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [doctor, setDoctor] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const doctorId = localStorage.getItem('doctorId'); // set this at login

  useEffect(() => {
    // Fetch doctor profile
    const fetchProfile = async () => {
      const res = await axios.get(`http://localhost:5000/api/doctors/${doctorId}`);
      setDoctor(res.data);
      setFormData(res.data);
    };
    fetchProfile();
  }, [doctorId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const data = new FormData();
    for (let key in formData) data.append(key, formData[key]);
    if (profileImage) data.append('profileImage', profileImage);

    try {
      const res = await axios.put(
        `http://localhost:5000/api/doctors/${doctorId}`,
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      alert('Profile updated successfully!');
      setDoctor(res.data);
      setEditMode(false);
    } catch (err) {
      console.error(err);
      alert('Update failed.');
    }
  };

  if (!doctor) return <p>Loading...</p>;

  return (
    <div>
      <h2>Doctor Profile</h2>
      {editMode ? (
        <>
          <input name="name" value={formData.name} onChange={handleChange} />
          <input name="specialization" value={formData.specialization} onChange={handleChange} />
          <input name="experience" value={formData.experience} onChange={handleChange} />
          <textarea name="bioMessage" value={formData.bioMessage} onChange={handleChange} />
          <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </>
      ) : (
        <div>
          <img src={doctor.profileImage} alt="Profile" width="150" />
          <p><strong>Name:</strong> {doctor.name}</p>
          <p><strong>Specialization:</strong> {doctor.specialization}</p>
          <p><strong>Experience:</strong> {doctor.experience} years</p>
          <p><strong>Bio:</strong> {doctor.bioMessage}</p>
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
