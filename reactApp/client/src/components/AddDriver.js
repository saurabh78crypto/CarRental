import React, { useEffect, useState } from 'react'
import driverImg from '../images/driverImg.jpg'
import { useFormik } from 'formik'
import { driverSchema } from '../schemas';
import { useHistory } from 'react-router-dom'


const initialValues = { name: "", email: "", phone: "",cars:"", password: "", cpassword: "" };

const AddDriver = () => {
  const history =useHistory();
  
  //To retrieve vehicleNumber from the database
  
  
  
    //To store data 
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: driverSchema,
        onSubmit: async (values, action) => {
           
            const res = await fetch('http://localhost:3000/api/auth/adddriver',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ values })
                });
                if(res === 422){
                    window.alert("Driver Already Registered!")
                }else{
                    window.alert("Driver Registered Successfully!")
                    history.push('/Dashboard')
                    action.resetForm();
                }
        },
    });


  return (
    <>
      {/* Navbar  */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/Dashboard">Ride-In</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown" >
                  <div class="btn-group dropleft" role="group">
                    <a type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="/login">Logout</a>
                    </div>
                    </div>
                  </li>
                </ul>
            </div>
        </nav>

        {/* form  */}
        <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Add Driver</h2>
                            <form method="POST" onSubmit={handleSubmit} className="register-form" id="register-form">

                                <div className="form-group">
                                    <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Your Name" />

                                    {errors.name && touched.name ? <p className='form-error'>{errors.name}</p> : null}
                                </div>

                                <div className="form-group">
                                    <label for="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Your Email" />

                                    {errors.email && touched.email ? <p className='form-error'>{errors.email}</p> : null}
                                </div>

                                <div className="form-group">
                                    <label for="phone"><i className="zmdi zmdi-phone"></i></label>
                                    <input type="number" name="phone" id="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Your Phone Number" />

                                    {errors.phone && touched.phone ? <p className='form-error'>{errors.phone}</p> : null}
                                </div>

                                <div className="form-group">
                                    <label for="cars"><i className="zmdi zmdi-car"></i></label>
                                    <select class="form-control select2 select2-hidden-accessible  border rounded" style={{width: '100%'}} tabindex="-1" aria-hidden="true">
                                        <option selected="selected">--Select--</option>
                                        <option>Swift Desire</option>
                                        <option>Wagnor</option>
                                        <option>Ertiga</option>
                                        <option>Innova</option>
                                        <option>Maranzo</option>
                                    </select>
                                    {errors.carsDrop && touched.carsDrop ? <p className='form-error'>{errors.carsDrop}</p> : null}
                                </div>

                                <div className="form-group">
                                    <label for="password"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Password" />

                                    {errors.password && touched.password ? <p className='form-error'>{errors.password}</p> : null}
                                </div>

                                <div className="form-group">
                                    <label for="cpassword"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="cpassword" id="cpassword"
                                        value={values.cpassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Repeat your password" />

                                    {errors.cpassword && touched.cpassword ? <p className='form-error'>{errors.cpassword}</p> : null}
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={driverImg} alt="sing up image" /></figure>
                        </div>
                    </div>
                </div>
            </section>
        
    </>
  )
}

export default AddDriver
