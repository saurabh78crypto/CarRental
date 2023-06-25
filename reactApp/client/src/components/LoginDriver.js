import React from 'react'
import { useFormik } from "formik";
// import { useHistory } from "react-router-dom";
import { loginDriverSchema } from '../schemas';
import loginDriverImg from '../images/loginDriverImg.jpg'

const initialValues = {email:'', password:''};
const LoginDriver = () => {
    //  const history = useHistory();  
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues,
        validationSchema: loginDriverSchema,
        onSubmit: async (values, action) => {
            const res = await fetch('/api/auth/loginDriver', {
              method:"POST",
              headers:{ "Content-Type" : "application/json"},
              body:JSON.stringify({ values })
            });
            const data = res.json();
            if(res.status === 400 || !data){
                window.alert("Invalid Credentials");
            }else{
              window.alert("Login Successful");
              //  history.push('/');
            }
          }
        })

  return (
    <>
      <section class="sign-in">
        <div class="container">
          <div class="signin-content">
            <div class="signin-image">
                <figure><img src={loginDriverImg} alt="sing up image"/></figure>
            </div>

            <div class="signin-form">
              <h2 class="form-title">Driver Sign In</h2>
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

export default LoginDriver
