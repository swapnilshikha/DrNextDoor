import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <>
      <style>
        {`
          .custom-input::placeholder {
            color: black;
            opacity: 1;
          }
          .cursor-pointer {
            cursor: pointer;
          }
          .dropdown-menu-custom p:hover {
            background-color: #333;
            cursor: pointer;
            border-radius: 4px;
            padding: 5px;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg bg-dark text-light" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2" to="/">DrNextDoor</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-3">
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/book">Book Appointment</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link fs-5" to="/treatment">Treatment</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link fs-5" to="/query">Ask a Question</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link fs-5" to="/about">About-Us</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link fs-5" to="/contact">Contact-Us</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link fs-5" to="/admin/login">Admin Panel</Link>
              </li>
            </ul>

            <form className="form-inline d-flex align-items-center p-2" style={{ borderRadius: '8px' }}>
              <input
                className="form-control mr-2 custom-input"
                type="search"
                placeholder="Enter Location"
                aria-label="Search"
                style={{
                  width: '300px',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  color: 'black'
                }}
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
              >
                Search
              </button>
            </form>

            <div className="ms-auto d-flex align-items-center gap-4 mx-3">
              {token ? (
                <div className="position-relative">
                  <div
                    className="d-flex align-items-center gap-2 cursor-pointer"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <FaUserCircle className="text-white" size={30} />
                    <FaChevronDown className="text-white" size={14} />
                  </div>

                  {showDropdown && (
                    <div
                      className="position-absolute bg-dark text-light p-2 mt-2 rounded shadow dropdown-menu-custom"
                      style={{ right: 0 }}
                    >
                      <p className="mb-1">My Profile</p>
                      <p className="mb-1">My Appointments</p>
                      <p className="mb-0" onClick={() => setToken(false)}>Logout</p>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="btn btn-secondary px-4 py-2 rounded-pill"
                >
                  Create Account
                </button>
              )}
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
