import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [patient, setPatient] = useState(() => {
    const storedPatient = localStorage.getItem("patient");
    return storedPatient ? JSON.parse(storedPatient) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem("patientToken"));

  const login = (data) => {
    setPatient(data.patient);
    setToken(data.token);
    localStorage.setItem("patient", JSON.stringify(data.patient));
    localStorage.setItem("patientToken", data.token);
  };

  const logout = () => {
    setPatient(null);
    setToken(null);
    localStorage.removeItem("patient");
    localStorage.removeItem("patientToken");
  };

  return (
    <AuthContext.Provider value={{ patient, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
