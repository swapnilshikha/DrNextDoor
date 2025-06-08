import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // PATIENT AUTH STATES
  const [patient, setPatient] = useState(() => {
    const storedPatient = localStorage.getItem('patient');
    return storedPatient ? JSON.parse(storedPatient) : null;
  });
  const [token, setToken] = useState(localStorage.getItem("patientToken"));

  // DOCTOR AUTH STATES
  const [doctor, setDoctor] = useState(() => {
    const storedDoctor = localStorage.getItem('doctor');
    return storedDoctor ? JSON.parse(storedDoctor) : null;
  });
  const [doctorToken, setDoctorToken] = useState(localStorage.getItem("doctorToken"));

  // ADMIN AUTH STATES
  const [admin, setAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem('admin');
    if (storedAdmin && storedAdmin !== "undefined") {
      try {
        return JSON.parse(storedAdmin);
      } catch (error) {
        console.error("Failed to parse admin data:", error);
        return null;
      }
    }
    return null;
  });
  const [adminToken, setAdminToken] = useState(localStorage.getItem("adminToken"));

  // PATIENT LOGIN / LOGOUT
  const login = (data) => {
    setPatient(data.patient);
    setToken(data.token);
    localStorage.setItem("patient", JSON.stringify(data.patient));
    localStorage.setItem("patientToken", data.token);
    if(doctor){
      localStorage.removeItem("doctor")
      localStorage.removeItem("doctorToken")
    }
    if(admin){
      localStorage.removeItem("admin")
      localStorage.removeItem("adminToken")
    }
  };

  const logout = () => {
    setPatient(null);
    setToken(null);
    localStorage.removeItem("patient");
    localStorage.removeItem("patientToken");
  };

  // DOCTOR LOGIN / LOGOUT
  const loginDoctor = (data) => {
    setDoctor(data.doctor);
    setDoctorToken(data.token);
    localStorage.setItem("doctor", JSON.stringify(data.doctor));
    localStorage.setItem("doctorToken", data.token);
    if(patient){
      localStorage.removeItem("patient")
      localStorage.removeItem("patientToken")
    }
    if(admin){
      localStorage.removeItem("admin")
      localStorage.removeItem("adminToken")
    }
  };

  const logoutDoctor = () => {
    setDoctor(null);
    setDoctorToken(null);
    localStorage.removeItem("doctor");
    localStorage.removeItem("doctorToken");
  };

  // ADMIN LOGIN / LOGOUT
  const loginAdmin = (data) => {
    setAdmin(data.admin); // store admin info (e.g., name)
    setAdminToken(data.token);
    localStorage.setItem("admin", JSON.stringify(data.admin));
    localStorage.setItem("adminToken", data.token);
    if(doctor){
      localStorage.removeItem("doctor")
      localStorage.removeItem("doctorToken")
    }
    if(patient){
      localStorage.removeItem("patient")
      localStorage.removeItem("patientToken")
    }
  };

  const logoutAdmin = () => {
    setAdmin(null);
    setAdminToken(null);
    localStorage.removeItem("admin");
    localStorage.removeItem("adminToken");
  };

  return (
    <AuthContext.Provider
      value={{
        // patient
        patient,
        token,
        login,
        logout,
        // doctor
        doctor,
        doctorToken,
        loginDoctor,
        logoutDoctor,
        // admin
        admin,
        adminToken,
        loginAdmin,
        logoutAdmin,
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