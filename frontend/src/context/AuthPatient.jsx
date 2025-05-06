import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // PATIENT AUTH STATES
  const [patient, setPatient] = useState(()=>{
    const storedPatient=localStorage.getItem('patient');
    return storedPatient?JSON.parse(storedPatient):null
  }
  );
  const [patientToken, setPatientToken] = useState(
    localStorage.getItem("patientToken")
  );

  // DOCTOR AUTH STATES
  const [doctor, setDoctor] = useState(()=>{
    const storedDoctor=localStorage.getItem('doctor');
    return storedDoctor?JSON.parse(localStorage.getItem("doctor")):null

  }
  );
  const [doctorToken, setDoctorToken] = useState(
    localStorage.getItem("doctorToken")
  );

  // PATIENT LOGIN / LOGOUT
  const login = (data) => {
    setPatient(data.patient);
    setPatientToken(data.token);
    localStorage.setItem("patient", JSON.stringify(data.patient));
    localStorage.setItem("patientToken", data.token);
  };

  const logout = () => {
    setPatient(null);
    setPatientToken(null);
    localStorage.removeItem("patient");
    localStorage.removeItem("patientToken");
  };

  // DOCTOR LOGIN / LOGOUT
  const loginDoctor = (data) => {
    setDoctor(data.doctor);
    setDoctorToken(data.token);
    localStorage.setItem("doctor", JSON.stringify(data.doctor));
    localStorage.setItem("doctorToken", data.token);
  };

  const logoutDoctor = () => {
    setDoctor(null);
    setDoctorToken(null);
    localStorage.removeItem("doctor");
    localStorage.removeItem("doctorToken");
  };

  return (
    <AuthContext.Provider
      value={{
        // patient
        patient,
        patientToken,
        login,
        logout,
        // doctor
        doctor,
        doctorToken,
        loginDoctor,
        logoutDoctor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};