// App.js
import React from 'react';
import DoctorDashboard from './pages/DoctorDashboard';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import MainLayout from "./Layout/MainLayout"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Contact from "./pages/Contact"



import Appointments from './pages/DoctorDashboard';
import Register from './pages/Register'
import Home from './pages/Home'
import {AuthProvider} from './context/AuthPatient'
import DoctorLogin from './pages/DoctorLogin';
import AboutUs from './pages/About';

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",element:<MainLayout/>,
      children:[
        {path:"/",element:<Home/>},
        {path:"/appointments",element:<Appointments/>},
        {path:"/profile",element:<Profile/>},
        {path:"/login",element:<Login/>},
        {path:"/register",element:<Register/>},
        {path:"/doctorLogin",element:<DoctorLogin/>},
        {path:"/about",element:<AboutUs/>}
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
