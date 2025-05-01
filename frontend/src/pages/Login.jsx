import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from './../utils/utils'
import { useAuth } from './../context/AuthPatient'
import { useNavigate } from 'react-router-dom'
import loginBack from './../assets/login-back.jpg'
const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")
        try {
            let data = await axios.post(`${API}/patient/login`, {email, password})
            console.log(data)
            login(data.data)
            setEmail("")
            setPassword("")
            navigate("/")
        } catch (error) {
            setMessage("Invalid Credentials")
        }
        setLoading(false)
    }
    useEffect(() => {
        document.body.style.backgroundImage = `url(${loginBack})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';

        
    }, []);
    return (
        <>
        <style>
            {`
            
            .card{
                background-color: rgba(0,0,0,0.8);
                border-radius: 20px;
            }
            `}
        </style>
        <div className="row" style={{marginTop:"15%"}}>
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h3 style={{color:"white" ,textAlign:"center"}}>Log In Here</h3>
                        <p>{message}</p>
                    </div>
                    <div className="card-body">
                        <form method="post" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="form-control mb-2"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                className="form-control mb-2"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            {!loading && (
                                <input
                                    type="submit"
                                    value="Log In"
                                    className="btn btn-secondary"
                                    style={{marginLeft:"40%"}}
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

export default Login