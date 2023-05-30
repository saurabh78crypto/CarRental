import reguserImg from '../images/reguser.jpg'
import { useFormik } from 'formik' 
import { signUPSchema } from '../schemas';

//  const User = require('');

const initialValues = {
  name:"",
  email:"",
  password:"",
  cpassword:""
};

const RegUser = () => {

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues,
      validationSchema: signUPSchema,
      onSubmit : (values, action) => {

        const newUser = new User({
          name:values.name,
          email:values.email,
          password:values.password,
          cpassword:values.cpassword,
        });

        newUser.save( (err) => {
            if(err) {
              window.alert('Invalid Registration',err);
            } else{
              window.alert('Register Successfully');
            }
        })
        
        action.resetForm();
        
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
                                placeholder="Your Name"/>

                                { errors.name && touched.name ?  <p className='form-error'>{ errors.name }</p> : null}  
                            </div>

                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your Email"/>

                                { errors.email && touched.email ?  <p className='form-error'>{ errors.email }</p> : null}
                            </div>

                            <div className="form-group">
                                <label for="password"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="pass"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Password"/>

                                { errors.password && touched.password ?  <p className='form-error'>{ errors.password }</p> : null}
                            </div>

                            <div className="form-group">
                                <label for="cpassword"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="cpassword" id="re_pass"
                                value={values.cpassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Repeat your password"/>

                                { errors.cpassword && touched.cpassword ?  <p className='form-error'>{ errors.cpassword }</p> : null}
                            </div>

                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={reguserImg} alt="sing up image"/></figure>
                        <a href='/login' className="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default RegUser
