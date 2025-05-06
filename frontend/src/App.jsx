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
<<<<<<< HEAD
import Appointments from './pages/DoctorDashboard';
=======
import Appointments from './pages/Appointments';
>>>>>>> c1a654ae0eb76c3639882c99838b87b869aedaaa
import Register from './pages/Register'
import Home from './pages/Home'
import {AuthProvider} from './context/AuthPatient'
import DoctorLogin from './pages/DoctorLogin';
import AboutUs from './pages/About';
<<<<<<< HEAD
import PatientProfile from './pages/PatientProfile';
import UpdatePatient from './pages/UpdatePatient';
=======
import DoctorRegister from './pages/DoctorRegister';
import DoctorProfile from './pages/DoctorProfile';
import AskQuestion from './pages/AskQuestion';
import QuestionList from './components/QuestionList'; 
<<<<<<< HEAD
import AddDoctor from './pages/AddDoctor';
import AdminHomme from './pages/AdminHomme';
import DrDetailsAdmin from './pages/DrDetailsAdmin';
=======

>>>>>>> 16fda248173946ae46c96576384d89b6df81c4c5
>>>>>>> c1a654ae0eb76c3639882c99838b87b869aedaaa

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
        {path:"/doctorLogin",element:<DoctorLogin/>},
        {path:"/about",element:<AboutUs/>},
<<<<<<< HEAD
        {path:"/patientProfile",element:<PatientProfile/>},
        {path:"/updateProfile",element:<UpdatePatient/>}
=======
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


>>>>>>> 16fda248173946ae46c96576384d89b6df81c4c5
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
