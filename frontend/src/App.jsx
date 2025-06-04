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
import AdminLogin from "./pages/AdminLogin"
import Profile from "./pages/DoctorProfile"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Appointments from './pages/Appointments';
import Register from './pages/Register'
import Home from './pages/Home'
import {AuthProvider} from './context/AuthPatient'
import DoctorLogin from './pages/DoctorLogin';
import AboutUs from './pages/About';
import PatientProfile from './pages/PatientProfile';
import UpdatePatient from './pages/UpdatePatient';
import DoctorRegister from './pages/DoctorRegister';
import DoctorProfile from './pages/DoctorProfile';
import AskQuestion from './pages/AskQuestion';
import QuestionList from './components/QuestionList'; 

import AddDoctor from './pages/AddDoctor';
import AdminHomme from './pages/AdminHomme';
import DrDetailsAdmin from './pages/DrDetailsAdmin';
import BookAppointments from './pages/BookAppointments';

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",element:<MainLayout/>,
      children:[
        {path:"/",element:<Home/>},
        {path:"/admin/login",element:<AdminLogin/>},
        {path:"/appointments",element:<Appointments/>},
        //{path:"/profile",element:<Profile/>},
        {path:"/login",element:<Login/>},
        {path:"/register",element:<Register/>},
        {path:"/doctors/:id",element:<BookAppointments/>},
        {path:"/doctorLogin",element:<DoctorLogin/>},

        {path:"/about",element:<AboutUs/>},
        {path:"/patientProfile",element:<PatientProfile/>},
        {path:"/updateProfile",element:<UpdatePatient/>},
        {path:"/DoctorRegister",element:<DoctorRegister/>},
        {path:"/DoctorProfile",element:<DoctorProfile/>},
        {path:"/contact",element:<Contact/>},
        {path:"/query",element:<AskQuestion/>},
        {path:"/questions",element:<QuestionList/>},
        {path:"/doctorDashboard",element:<DoctorDashboard/>},


        //admin routes
        {path:"/admin/allDoctors", element: <AdminHomme />},
        {path:"/admin/doctors/:id", element: <DrDetailsAdmin />},
        {path:"/admin/addDoctor", element: <AddDoctor />}
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
