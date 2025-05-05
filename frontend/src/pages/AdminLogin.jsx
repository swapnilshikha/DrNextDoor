import axios from 'axios'
import React, { useRef, useState } from 'react'
import { API } from '../utils/utils'
import { Link, useNavigate } from 'react-router-dom'
//import { useAuth } from '../context/AuthContext'

const AdminLogin = () => {
    // const { login } = useAuth()
    // const navigate = useNavigate()
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")
        
        try {
            let email = emailRef.current.value
            let password = passwordRef.current.value
            console.log(email, password)
            let data = await axios.post(`${API}/api/admin/login`, {email, password})
            if (res.status === 200) {
                setMessage("Login Successful")
                const { token, name } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("adminName", name);
                navigate("/"); // or wherever you go post-login
              }
        } catch (error) {
            setMessage("Invalid Credentials")
        }
        setLoading(false)
    }

  return (
    <>
      <div className="row">
        <div className="col-md-6 mx-auto">
            <div className="card">
                    <div className="card-header">
                        <h3>Admin Login</h3>
                        <p>{message}</p>
                    </div>
                    <div className="card-body">
                        <form method="post" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="form-control mb-2"
                                placeholder="Email"
                                ref = {emailRef}
                                required
                            />
                            <input
                                type="password"
                                className="form-control mb-2"
                                placeholder="Password"
                                ref = {passwordRef}
                                required
                            />
                            <Link to="/Doctor/Login">Login as Doctor..</Link>
                            {!loading && (
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn btn-primary"
                                />
                            )}
                        </form>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminLogin
