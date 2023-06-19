import regVechImg from '../images/regvehicle.jpg'
import React, {useFormik} from 'formik'
import { useForm } from 'react-hook-form' 
import {vehicleSchema} from '../schemas'
import { useHistory } from 'react-router-dom';

const initialValues = { vehicleNumber: "", model: "", status: "" };
const RegVechile = () => {

    const form = useForm({
        defaultValues:{
            status: "Unavailable"
        },
    });

    const history = useHistory();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik ({
        initialValues,
        validationSchema: vehicleSchema,
        onSubmit: async (values, action) => {
            const res = await fetch('http://localhost:3000/api/auth/regvehicle', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ values })
            });
            if(res === 422){
                window.alert("Car Already Registered!")
            }else{
                window.alert("Car Registered Successfully!")
                action.resetForm();
                history.push('/Dashboard')
            }
        },
    })

  return (
    <>
     {/* Navbar  */}
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Ride-In</a>
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
                        <h2 className="form-title">Add Vehicle</h2>
                        <form method="POST" onSubmit={handleSubmit} className="register-form" id="register-form">

                            <div className="form-group">
                                <label for="vehicleNumber"><i className="zmdi zmdi-car"></i></label>
                                <input type="text" name="vehicleNumber" id="vehicleNumber"
                                value={values.vehicleNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your Vehicle Number"/>
                            </div>

                            <div className="form-group">
                                <label for="model"><i className="zmdi zmdi-car"></i></label>
                                <input type="text" name="model" id="model"
                                value={values.model}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your Vehicle Model"/>
                            </div>

                            <div className="form-group">
                                <label for="status"><i className="zmdi zmdi-car"></i></label>
                                <input type="text" name="status" id="status"
                                disabled 
                                value={values.status}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                
                                />
                            </div>
                            
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register Vehicle"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={regVechImg} alt="sing up image"/></figure>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default RegVechile
