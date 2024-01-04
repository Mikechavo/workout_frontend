import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const SignIn = ({ signIn }) => {

  const navigate = useNavigate()
  const formRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    // what we are going to pass into our signIn method
    const userInfo = {
      user: { email: data.email, password: data.password },
    }
    signIn(userInfo)
    navigate("/")
    e.target.reset()
  }

  return (
    <>
      <div className='signup-container'>
        <h2>Sign in to your account</h2>
        {/* calling attribute ref={formRef} lets formData know what to reference */}
        <form className='form-container' onSubmit={handleSubmit} ref={formRef}>

          <div className='input-container'>
            <label>Email:</label> 
            <input type='email' name='email' placeholder='Enter Email' />
            
          </div>

          <div className='input-container'>
            <label>Password:</label> 
            <input type='password' name='password' placeholder='Enter Password' />
          </div>

          <input id="submit" type="submit" value="submit" />
        </form>

      </div>
    </>
  )
}

export default SignIn