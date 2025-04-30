import { createContext,useContext,useState } from "react";

const AuthContext=createContext()
export const AuthProvider=({children})=>{
    const [patient,setPatient]=useState(localStorage.getItem("patient"))
    const [token,setToken]=useState(localStorage.getItem("patientToken"))

    function login(data){
        setPatient(data.patient)
        setToken(data.token)
        localStorage.setItem("patient",JSON.stringify(data.patient))
        localStorage.setItem("patientToken",data.token)
    }
    function logout(){
        setPatient(null)
        setToken(null)
        localStorage.removeItem("patient")
        localStorage.removeItem("patientToken")
    }

    return(
        <AuthContext.Provider value={{patient,token,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext)
}