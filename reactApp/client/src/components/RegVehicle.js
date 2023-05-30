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
      <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Register Vehicle</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name"
                                value={regVec.name}
                                onChange={handleInputs}
                                placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email"
                                value={regVec.email}
                                onChange={handleInputs}
                                placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass"
                                value={regVec.password}
                                onChange={handleInputs}
                                placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass"
                                value={regVec.cpassword}
                                onChange={handleInputs}
                                placeholder="Repeat your password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register Vehicle"
                                onClick={postData}/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={regVechImg} alt="sing up image"/></figure>
                        <a href='/login' className="signup-image-link">Already registered</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default RegVechile
