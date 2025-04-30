import React from 'react'
import { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {

  const navigate = useNavigate

  const [showDropdown, setShowDropdown] = useState(false);
  const [token, setToken] = useState(true)

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light" data-bs-theme="dark">
    <div className="container-fluid">
    <Link className="navbar-brand fs-2" to="#">DrNextDoor</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-3">
        {/* mx-3 ----> Apply margin-left and margin-right */}
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
      </ul>

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
  )
}

export default Navbar
