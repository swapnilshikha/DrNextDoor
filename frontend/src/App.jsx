<<<<<<< HEAD
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DoctorDashboard from './pages/DoctorDashboard';
import Appointments from './pages/Appointments';
import Profile from './pages/Profile';
import './App.css';
=======
import React from 'react'
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
>>>>>>> 01ab059c8e88f3d24467df077e9343b1eb77c695

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={DoctorDashboard} />
      </Switch>
    </Router>
  );
};

<<<<<<< HEAD
export default App;
=======
const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",element:<MainLayout/>,
      children:[
        {path:"/",element:<Home/>},
      ]
    }
  ])
  return <RouterProvider router={router}/>
}
>>>>>>> 01ab059c8e88f3d24467df077e9343b1eb77c695

