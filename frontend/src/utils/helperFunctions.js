import { jwtDecode } from "jwt-decode";
export const getUserIdFromToken = () => {
    let token = localStorage.getItem("patientToken")
    if(!token) return null

    try {
        let decoded = jwtDecode(token)
        return decoded.id
    } catch (error) {
        return null
    }
}

export function formatDate(dateString){
    return dateString.split("T")[0]
}