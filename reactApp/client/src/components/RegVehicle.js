import React, {useState} from 'react'
import regVechImg from '../images/regvehicle.jpg'
import { useHistory } from 'react-router-dom';


const RegVechile = () => {

    //To navigate through pages  
    const history = useHistory();
    //To store form data in useState using array
    const [regVec, setVec] = useState({ email:"",phone:"",vehicleNumber:"",password:"",cpassword:"" });
  
    let name, value;
    //Handling the inputs using the name and value property
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        //Storing the data in useState
        setVec({...regVec, [name]:value })
    }
  
    const postData = async (e) => {
      //To remove or prevent from the reloading
        e.preventDefault();

        //Accessing the fields 
        const {email, phone, vehicleNumber,  password, cpassword} = regVec;
       
        //To connect frontend to the backend we're using the fetch Api
        const res = await fetch('/regVehicle', {
          method:'POST',
          headers: { 'Content-Type' : 'application/json' },
          //o convert json data into string to make server understandable code
          body: JSON.stringify({ email, phone, vehicleNumber, password, cpassword })
        });
  
        const data = await res.json();
  
        if(res.status === 422 || !data){
          window.alert("Invalid Registration!");
        }else{
          window.alert(" Registration Successful!");
          history.push('/login');
        }
    }


  return (
    <>
      <section className='regVehicle'>
        <div className='container mt-5'>
          <div className='regVehicle-content'>
            <div className='regVehicle-form'>
                <h2 className='form-title'>Register Vehicle</h2>
                <form method='POST' className='register-form' id='register-form'>

                  <div className='form-group'>
                      <label htmlFor="email">
                      <i class="zmdi zmdi-account material-icons-email"></i>
                      <input type="email" name='email' id='email' autoComplete='off'
                        value={regVec.email}
                        onChange={handleInputs}
                      placeholder='Your Email'/>
                      </label>
                  </div>

                  <div className='form-group'>
                      <label htmlFor="phone">
                      <i class="zmdi zmdi-phone-in-talk material-icons-phone"></i>
                      <input type="number" name='phone' id='phone' autoComplete='off'
                        value={regVec.phone}
                        onChange={handleInputs}
                      placeholder='Your Phone Number'/>
                      </label>
                  </div>

                  <div className='form-group'>
                      <label htmlFor="vehicleNumber">
                      <i class="zmdi zmdi-account material-icons-email"></i>
                      <input type="text" name='vehicleNumber' id='vehicleNumber' autoComplete='off'
                        value={regVec.vehicleNumber}
                        onChange={handleInputs}
                      placeholder='Vehicle Number:'/>
                      </label>
                  </div>

                  <div className='form-group'>
                      <label htmlFor="password">
                      <i class="zmdi zmdi-lock material-icons-password"></i>
                      <input type="password" name='password' id='password' autoComplete='off'
                        value={regVec.password}
                        onChange={handleInputs}
                      placeholder='Your Password'/>
                      </label>
                  </div>

                  <div className='form-group'>
                      <label htmlFor="cpassword">
                      <i class="zmdi zmdi-lock material-icons-cpassword"></i>
                      <input type="password" name='cpassword' id='cpassword' autoComplete='off'
                        value={regVec.cpassword}
                        onChange={handleInputs}
                      placeholder='Confirm Your Password'/>
                      </label>
                  </div>
                  <div className='form-group form-button'>
                      <input type="submit" name='signup' id='signup' className='form-submit' value='Register' 
                      onClick={postData}
                      />
                  </div>
                </form>
                </div>
                <div className='signup-image'>
                    <figure>
                      <img src={regVechImg} alt="registration image" width='200px' height='200px'/>
                    </figure>
                    
                    <a href="/login" className='signup-image-link'> Already registered? Login Now! </a>
                    
                </div>

            
          </div>    
        </div>
      </section>


    </>
  )
}

export default RegVechile
