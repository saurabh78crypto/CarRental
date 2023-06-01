import React, {useState} from 'react'
import regVechImg from '../images/regvehicle.jpg'
import { useHistory } from 'react-router-dom';


const RegVechile = () => {
    const history = useHistory();
    const [regVec, setVec] = useState({ email:"",phone:"",vehicleNumber:"",password:"",cpassword:"" });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setVec({...regVec, [name]:value })
    }
    
    const postData = async (e) => {
        e.preventDefault();
        const {email, phone, vehicleNumber,  password, cpassword} = regVec;
        const res = await fetch('/regVehicle', {
          method:'POST',
          headers: { 'Content-Type' : 'application/json' },
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
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email"
                                value={regVec.email}
                                onChange={handleInputs}
                                placeholder="Your Email"/>
                            </div>

                            <div className="form-group">
                                <label for="phone"><i className="zmdi zmdi-phone"></i></label>
                                <input type="number" name="phone" id="phone"
                                value={regVec.phone}
                                onChange={handleInputs}
                                placeholder="Your Phone Number"/>
                            </div>

                            <div className="form-group">
                                <label for="vehicleNumber"><i className="zmdi zmdi-car"></i></label>
                                <input type="text" name="vehicleNumber" id="vehicleNumber"
                                value={regVec.vehicleNumber}
                                onChange={handleInputs}
                                placeholder="Your Vehicle Number"/>
                            </div>

                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password"
                                value={regVec.password}
                                onChange={handleInputs}
                                placeholder="Password"/>
                            </div>

                            <div className="form-group">
                                <label for="cpassword"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="cpassword" id="cpassword"
                                value={regVec.cpassword}
                                onChange={handleInputs}
                                placeholder="Repeat your password"/>
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
