import { useFormik } from 'formik';
import React from 'react'
import { locationSchema } from '../schemas';
import newLocation from "../images/newLocation.jpg";

const initialValues = { name:"" };

const AddLocation = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: locationSchema,
        onSubmit: async (values, action) => {
            const res = await fetch ('/api/auth/newlocation',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ values })
            });
            const data = await res.json();
            if(res.status === 500 || !data){
                window.alert('Location already added!')
            }else{
                window.alert('Location added successfully!')
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

        <section class="sign-in">
        <div class="container">
          <div class="signin-content">
            <div class="signin-image">
                <figure><img src={newLocation} alt="sing up image"/></figure>
            </div>

            <div class="signin-form">
              <h2 class="form-title">Add Location</h2>
              <form method="POST" onSubmit={handleSubmit} class="register-form" id="login-form">
                <div class="form-group">
                    <label for="name"><i class="zmdi zmdi-pin"></i></label>
                    <input type="text" name="name" id="name" placeholder="Enter Location"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? <p className='form-error'>{errors.name}</p> : null}
                </div>

                <div class="form-group form-button">
                    <input type="submit" name="signin" id="signin" class="form-submit" value="Add" />
                </div>
              </form>

              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddLocation
