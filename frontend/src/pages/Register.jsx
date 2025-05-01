import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { API } from './../utils/utils'

const Register = () => {

    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    const nameRef = useRef()
    const emailRef = useRef()
    const [password,setPassword]=useState("")
    const [confirmPass,setConfirmPass]=useState("")
    const [passwordMatch,setPasswordMatch]=useState(true)
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!passwordMatch) {
            setMessage("Both passwords should match")
            setLoading(false)
            return
        }
        let name = nameRef.current.value
        let email = emailRef.current.value
            
        
        try {   
               
            let patient = await axios.post(`${API}/patient/register`,{name,email,password})
            setMessage("Account Created")
            nameRef.current.value = ""
            emailRef.current.value = ""
            setPassword("")
            setConfirmPass("")
            document.getElementById("password").value=""
            document.getElementById("confirmPass").value=""

            
        } catch (error) {
            
            if(error.status === 400){
                setMessage(error.response.data.message)
            } else {
                setMessage("Something Wrong")
            }
            
        }
        setLoading(false)
    }
    useEffect(() => {
        if(password!==confirmPass){
            setPasswordMatch(false)
            setMessage("Both passwords should match")
        }
        else{
            setPasswordMatch(true)
            setMessage("")
        }
      }, [confirmPass]); 
    return (
    <div className='row'>
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h3>Create an Account</h3>
                    <p>{message}</p>
                </div>
                <div className="card-body">
                    <form method="post" onSubmit={handleSubmit}>
                        <input ref={nameRef} type='text' className='form-control mb-2' placeholder='Enter your Name' required /> 
                        <input ref={emailRef} type='email' className='form-control mb-2' placeholder='Enter your email' required /> 
                        <input type='password' className='form-control mb-2' 
                            placeholder='Enter password'
                            id="password"
                            onChange={(e)=>{setPassword(e.target.value)}}
                            required /> 
                        <input type='password' className='form-control mb-2' 
                            placeholder='Confirm password' 
                            id="confirmPass"
                            onChange={(e)=>{setConfirmPass(e.target.value)
                                setPasswordMatch(password===e.target.value)
                            }}
                            required /> 
                        {
                            !loading && <input type='submit' value="Register" className='btn btn-primary' />
                        }
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register