import React from 'react'
import { NavLink } from 'react-router-dom'
import reguserImg from '../images/reguser.jpg'
const RegUser = () => {
  return (
    <>
      <section className='reguser'>
        <div className='container mt-5'>
          <div className='reguser-content'>
            <div className='reguser-form'>
                <h2 className='form-title'>Register User</h2>
                <form className='register-form' id='register-form'>

                  <div className='form-group'>
                      <label htmlFor="name">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                      <input type="text" name='name' id='name' autoComplete='off' placeholder='Your Name'/>
                      </label>
                  </div>

                  <div className='form-group'>
                      <label htmlFor="email">
                      <i class="zmdi zmdi-account material-icons-email"></i>
                      <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email'/>
                      </label>
                  </div>

                  <div className='form-group'>
                      <label htmlFor="phone">
                      <i class="zmdi zmdi-phone-in-talk material-icons-phone"></i>
                      <input type="number" name='phone' id='phone' autoComplete='off' placeholder='Your Phone Number'/>
                      </label>
                  </div>

                  <div className='form-group'>
                      <label htmlFor="password">
                      <i class="zmdi zmdi-lock material-icons-password"></i>
                      <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password'/>
                      </label>
                  </div>

                  <div className='form-group'>
                      <label htmlFor="cpassword">
                      <i class="zmdi zmdi-lock material-icons-cpassword"></i>
                      <input type="password" name='cpassword' id='cpassword' autoComplete='off' placeholder='Confirm Your Password'/>
                      </label>
                  </div>
                  <div className='form-group form-button'>
                      <input type="submit" name='signup' id='signup' className='form-submit' value='Register'/>
                  </div>
                </form>
                </div>
                <div className='signup-image'>
                    <figure>
                      <img src={reguserImg} alt="registration image" width='200px' height='200px'/>
                    </figure>
                    
                    <a href="/login" className='signup-image-link'> Already registered? Login Now! </a>
                    
                </div>

            
          </div>    
        </div>
      </section>
    </>
  )
}

export default RegUser
