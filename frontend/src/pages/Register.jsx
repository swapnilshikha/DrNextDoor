import axios from 'axios'
import React, { useRef, useState } from 'react'
import { API } from './../utils/utils'

const Register = () => {

    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    const nameRef = useRef()
    const mobileRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmRef=useRef()
    const imageRef=useRef()
    const addline1Ref=useRef()
    const addline2Ref=useRef()
    const gender=useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        let name = nameRef.current.value
        let email = emailRef.current.value
        let mobile = mobileRef.current.value
        let SIC=sicRef.current.value
        let password = passwordRef.current.value

        try {
            let user = await axios.post(`${API}/users/users`, {name, mobile, email, SIC, password})
            setMessage("Account Created")
            nameRef.current.value = ""
            mobileRef.current.value = ""
            emailRef.current.value = ""
            sicRef.current.value=""
            passwordRef.current.value = ""
            
        } catch (error) {
            if(error.status == 400){
                setMessage("Check email and mobile, and try again")
            } else {
                setMessage("Something Wrong")
            }
        }
        setLoading(false)
    }

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
                        <input ref={passwordRef} type='password' className='form-control mb-2' placeholder='Enter password' required /> 
                        <input ref={confirmRef} type='password' className='form-control mb-2' placeholder='Confirm password' required /> 
                        <input ref={imageRef} type='file' className='form-control mb-2' placeholder='Upload your image'/>
                        Enter your address
                        <input ref={addline1Ref} type='text' className='form-control mb-2' placeholder='Line 1'/>
                        <input ref={addline2Ref} type='text' className='form-control mb-2' placeholder='Line 2'/>
                        Select your gender
                        <input type='radio' value="Male"/>Male
                        <input type='radio' value="Female"/>female
                        <input ref={mobileRef} type='text' className='form-control mb-2' placeholder='Mobile' required /> 
                        {
                            !loading && <input type='submit' value="Sign Up" className='btn btn-primary' />
                        }
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register