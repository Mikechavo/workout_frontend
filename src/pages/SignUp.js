import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'



const SignUp = ({ signUp}) => {
  const navigate = useNavigate()
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
      }
    }
    signUp(userInfo)
    navigate("/")
    e.target.reset()
  }

  return (
    <>
      <div className='signup-container'>
        <h2>Create Your Account</h2>

        <form className='form-container' ref={formRef} onSubmit={handleSubmit}>

          <div className='input-container'>
            <label>Email:</label> 
            <input type='email' name='email' placeholder='Enter Email' />
            
          </div>

          <div className='input-container'>
            <label>Password:</label> 
            <input type='password' name='password' placeholder='Enter Password' />
          </div>
          
          <div className='input-container'>
            <label>Re-type Password:</label>
            <input type='password' name=' password_confirmation' placeholder='Confirm password' />
          </div>

          <input id="submit" type="submit" value="submit" />
        </form>

      </div>
    </>
  )
}

export default SignUp