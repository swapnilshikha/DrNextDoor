import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
//import MainLayout from "./Layout/MainLayout"
import Profile from "./pages/Profile"
import Appointments from "./pages/Appointments"
import Home from "./pages/Home"
import About from "./pages/About"
import Doctors from "./pages/Doctors"
import Login from "./pages/Login"
import Contact from "./pages/Contact"


function App() {
  reurn (
    <>
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </>
  )
}

export default App
