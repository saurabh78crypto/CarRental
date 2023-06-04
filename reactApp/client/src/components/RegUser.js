import reguserImg from '../images/reguser.jpg'
import { useFormik } from 'formik'
import { signUPSchema } from '../schemas';
import { useHistory } from 'react-router-dom'


const initialValues = { name: "", email: "", phone: "", password: "", cpassword: "" };

const RegUser = () => {
    const history =useHistory();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signUPSchema,
        onSubmit: async (values, action) => {
           
            const res = await fetch('http://localhost:3000/api/auth/reguser',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ values })
                });

                const data = res.json(); 

                if(res === 422 || !data){
                    window.alert("User Already Registered!")
                }else{
                    window.alert("User Registered Successfully!")
                    history.push('/login')
                    action.resetForm();
                }
            
        },
    });


    return (
        <>
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
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
                            <figure><img src={reguserImg} alt="sing up image" /></figure>
                            <a href='/login' className="signup-image-link">Already registered? Login Now!</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default RegUser
