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
        history.push('/');
      }
  } 

  return (
    <>
      <section className='sign-in'>
        <div className='container mt-5'>
          <div className='signin-content'>
          <div className='signup-image'>
              <figure>
                <img src={loginImg} alt="login image" width='200px' height='200px'/>
              </figure>
              <a href="/reguser" className='signup-image-link'> Don't have an account? Create Now! </a>                   
          </div>
            <div className='signin-form'>
                <h2 className='form-title'>Login User</h2>
                <form method='POST' className='register-form' id='register-form'>
                  <div className='form-group'>
                      <label htmlFor="email">
                      <i class="zmdi zmdi-account material-icons-email"></i>
                      <input type="email" name='email' id='email' autoComplete='off' 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Your Email'/>
                      </label>
                  </div>

                  <div className='form-group'>
                      <label htmlFor="password">
                      <i class="zmdi zmdi-lock material-icons-password"></i>
                      <input type="password" name='password' id='password' autoComplete='off' 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Your Password'/>
                      </label>
                  </div>

                  <div className='form-group form-button'>
                      <input type="submit" name='signin' id='signin' className='form-submit' value='Log In' onClick={loginUser}/>
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
