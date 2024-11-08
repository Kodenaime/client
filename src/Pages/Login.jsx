import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const changeInput = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  return (
    <section className='register'>
      <div className="container login-container" >

        <div className="login-left">
            <h2>Welcome</h2>
            <p>Don't have an account?</p>
            <Link to="/register" className='btn white'>Sign Up</Link>
        </div>

        <div className="login-right">
          <h2>Login</h2>
          <form action="" className="form register-form">          
              <p className="form-error">This is an error</p>
              
              <input type="email" placeholder="Email" name='email' value={userData.email} onChange={changeInput} autoFocus/>
              <input type="password" placeholder="Password" name='password' value={userData.password} onChange={changeInput}/>
            
              <button type='submit' className='btn'>Login</button>
            
          </form>
        </div>

      </div>
    </section>
  )
}

export default Login