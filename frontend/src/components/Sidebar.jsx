// components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();

  const navItemStyle = (path) => ({
    padding: '15px 20px',
    backgroundColor: pathname === path ? '#333' : 'transparent',
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    borderBottom: '1px solid #444',
  });

  return (
    <div style={{
      width: '220px',
      backgroundColor: '#222',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h3 style={{ padding: '20px', borderBottom: '1px solid #444' }}>Dr Dashboard</h3>
      <Link to="/" style={navItemStyle('/')}>Home</Link>
      <Link to="/appointments" style={navItemStyle('/appointments')}>Appointments</Link>
      <Link to="/profile" style={navItemStyle('/profile')}>Profile</Link>
      {/* Add logout or settings here */}
    </div>
  );
};

export default Sidebar;

