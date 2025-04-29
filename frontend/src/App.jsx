// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DoctorDashboard from './pages/DoctorDashboard';
import Appointments from './pages/Appointments';
import Profile from './pages/Profile';
import './App.css';

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

export default App;

