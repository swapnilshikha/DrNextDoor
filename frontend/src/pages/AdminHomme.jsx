import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DoctorCard from '../components/DoctorCard'
import { API } from '../utils/utils.js'

const AdminHomme = () => {
    const [doctors, setDoctors] = useState([])

    const getDoctors = async () => {
        try {
            const { data } = await axios.get(`${API}/admin/doctors`)
            setDoctors(data)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <>
      
    </>
  )
}

export default AdminHomme
