import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const changeInput = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  return (
    <section className='register'>
      <div className="container reg-container" >
        <div className="reg-left">
          <h2>Sign Up</h2>
          <form action="" className="form register-form">          
              <p className="form-error">This is an error</p>
              <input type="text" placeholder="Fullname" name='name' value={userData.name} onChange={changeInput}/>
              <input type="email" placeholder="Email" name='email' value={userData.email} onChange={changeInput}/>
              <input type="password" placeholder="Password" name='password' value={userData.password} onChange={changeInput}/>
              <input type="password" placeholder="Confirm Password" name='password2' value={userData.password2} onChange={changeInput}/>
              <button type='submit' className='btn'>Sign Up</button>
            
          </form>
        </div>
         

        <div className="reg-right">
            <h2>Welcome</h2>
            <p>Already have an account?</p>
            <Link to="/login" className='btn white'>Login</Link>
        </div>
      </div>
    </section>
  )
}

export default Register