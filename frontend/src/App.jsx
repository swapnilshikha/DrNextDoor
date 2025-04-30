// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DoctorDashboard from './pages/DoctorDashboard';
import Appointments from './pages/Appointments';
import Profile from './pages/Profile';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import MainLayout from "./Layout/MainLayout"
import Profile from "./pages/Profile"
import Appointments from "./pages/Appointments"
import Home from "./pages/Home"
import About from "./pages/About"
import Doctors from "./pages/Doctors"
import Login from "./pages/Login"
import Contact from "./pages/Contact"


import Register from './pages/Register'
import {AuthProvider} from './context/AuthPatient'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",element:<MainLayout/>,
      children:[
        {path:"/",element:<Home/>},
        {path:"/appointments",element:<Appointments/>},
        {path:"/profile",element:<Profile/>},
                {path:"/login",element:<Login/>},
        {path:"/register",element:<Register/>}
      ]
    }
  ])
  return(
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  ) 
}

export default App

