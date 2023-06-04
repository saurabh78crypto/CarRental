import React, { useState } from 'react'
import loginImg from '../images/login.jpg'
// import { useAuth0 } from "@auth0/auth0-react";
import { useFormik } from 'formik'
import {useHistory} from 'react-router-dom'
import {signInSchema} from '../schemas/index'

const initialValues = {email:'', password:''};

const Login = () => {
  const history = useHistory();  
  // const { loginWithRedirect } = useAuth0();
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: async (values, action) => {
          const res = await fetch('http://localhost:3000/api/auth/signin', {
            method:"POST",
            headers:{ "Content-Type" : "application/json"},
            body:JSON.stringify({ values })
          });
    
          const data = res.json();
    
          if(res.status === 400 || !data){
              window.alert("Invalid Credentials");
          }else{
            window.alert("Login Successful");
            history.push('/Dashboard');
          }
        }
      })
    
  return (
    <>
      <section class="sign-in">
        <div class="container">
          <div class="signin-content">
            <div class="signin-image">
                <figure><img src={loginImg} alt="sing up image"/></figure>
                <a href="/reguser" class="signup-image-link">Don't have an account? Register Now!</a>
            </div>

            <div class="signin-form">
              <h2 class="form-title">Sign In</h2>
              <form method="POST" onSubmit={handleSubmit} class="register-form" id="login-form">
                <div class="form-group">
                    <label for="email"><i class="zmdi zmdi-account material-icons-email"></i></label>
                    <input type="text" name="email" id="email" placeholder="Your Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? <p className='form-error'>{errors.email}</p> : null}
                </div>

                <div class="form-group">
                    <label for="password"><i class="zmdi zmdi-lock"></i></label>
                    <input type="password" name="password" id="password" placeholder="Password"
                   value={values.password}
                   onChange={handleChange}
                   onBlur={handleBlur}
                    />
                {errors.password && touched.password ? <p className='form-error'>{errors.password}</p> : null}
                </div>

                <div class="form-group form-button">
                    <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
                </div>
              </form>

              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
