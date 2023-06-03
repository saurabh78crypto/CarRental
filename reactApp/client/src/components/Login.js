import React, {useState} from 'react'
import loginImg from '../images/login.jpg'
import {useHistory} from 'react-router-dom'

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
      e.preventDefault();
      
      const res = await fetch('/signin', {
        method:"POST",
        headers:{ "Content-Type" : "application/json"},
        body:JSON.stringify({ email, password })
      });

      const data = res.json();

      if(res.status === 400 || !data){
          window.alert("Invalid Credentials");
      }else{
        window.alert("Login Successful");
        history.push('/Dashboard');
      }
  } 

  return (
    <>
      <section class="sign-in">
        <div class="container">
          <div class="signin-content">
            <div class="signin-image">
                <figure><img src={loginImg} alt="sing up image"/></figure>
                <a href="/reguser" class="signup-image-link">Create an account</a>
                <a href="/regvehicle" class="signup-image-link">Register Vehicle</a>
            </div>

            <div class="signin-form">
              <h2 class="form-title">Sign In</h2>
              <form method="POST" class="register-form" id="login-form">
                <div class="form-group">
                    <label for="your_email"><i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" name="your_email" id="your_email" placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div class="form-group">
                    <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                    <input type="password" name="password" id="your_pass" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div class="form-group">
                    <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                    <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                </div>

                <div class="form-group form-button">
                    <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" onClick={loginUser}/>
                </div>
              </form>

              <div class="social-login">
                  <span class="social-label">Or login with</span>
                  <ul class="socials">
                      <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                      <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                      <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
