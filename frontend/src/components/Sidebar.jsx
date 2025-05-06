import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserMd, FaCalendarAlt, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo"><FaUserMd /> Dr. Panel</h2>
      <nav>
        <NavLink to="/doctor/dashboard" end>Dashboard</NavLink>
        <NavLink to="/doctor/appointments">Appointments</NavLink>
        <NavLink to="/doctor/patients">Patients</NavLink>
        <NavLink to="/DoctorProfile">Profile</NavLink>
        <NavLink to="/doctor/logout" className="logout"><FaSignOutAlt /> Logout</NavLink>
      </nav>

      <style>{`
        .sidebar {
          width: 220px;
          height: 80vh;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          color: white;
          display: flex;
          flex-direction: column;
          padding: 20px;
          position: fixed;
          box-shadow: 4px 0 20px rgba(0, 0, 0, 0.5);
          animation: slideIn 0.5s ease-in-out;
          border-radius:10px;
        }
        .logo {
          font-size: 20px;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        nav a {
          color: #ccc;
          text-decoration: none;
          margin-bottom: 20px;
          display: block;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        nav a:hover {
          color: white;
          transform: translateX(5px);
        }
        nav a.active {
          color: white;
          font-weight: bold;
        }
        nav a.logout {
          margin-top: auto;
          color: #ff4d4d;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
