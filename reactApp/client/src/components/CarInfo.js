import React, { useEffect, useState } from 'react'
import carinfo from '../images/carinfo.jpg'

const CarInfo = () => {

    //To retrive the vehicle model
    const [vehicleList, setVehicleList] = useState([]);
    const [selectVehicle,setSelectVehicle] = useState('');
    const [selectedVehicleDetails, setSelectedVehicleDetails] = useState(null);

    const handleChange = (e) => {
        setSelectVehicle(e.target.value)
    }

    useEffect(() => {
      fetch('/api/auth/getvehicleList')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data.vehicleList)) {
            setVehicleList(data.vehicleList);
          } else {
            console.log('Vehicle list is not an array:', data);
          }
        })
        .catch(error => console.log(error));
    }, []);

    const handleShowDetails = () => {
        if (selectVehicle) {
          fetch(`/api/auth/getvehicledetails/${selectVehicle}`)
            .then(res => res.json())
            .then(data => {
              setSelectedVehicleDetails(data);
            })
            .catch(error => console.log(error));
        }
      };


      
    

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


        <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Car Info</h2>
                            <form method="POST" className="register-form" id="register-form"></form>
                            <select class="form-control select2 select2-hidden-accessible  border rounded" style={{width: '100%'}} tabindex="-1" 
                                    aria-hidden="true" name='selectVehicle' value={selectVehicle} onChange={e => {setSelectVehicle(e.target.value) 
                                    handleChange(e)}} >
                                        <option>Select..</option>
                                        {vehicleList.map(Vehicles =>(   
                                        <option key={Vehicles._id} value={Vehicles.vehicleNumber} >{Vehicles.vehicleNumber}</option>
                                        ))}
                                    </select>
                                    
                                <div className="form-group form-button">
                                        <input type="submit" name="show" id="show" className="form-submit" value="Show" 
                                        onClick={handleShowDetails}/>
                                </div>
                                
                                {/* Display selected vehicle details  */}
                                {selectedVehicleDetails && (
                                    <div>
                                      <h2> Vehicle Details</h2>
                                      <p>Vehicle Number: {selectedVehicleDetails.vehicleNumber}</p>
                                      <p>Model: {selectedVehicleDetails.model}</p>
                                    </div>
                                )}
                            
                            <form/>

                        </div>
                        <div className="signup-image">
                            <figure><img src={carinfo} alt="sing up image" /></figure>
                        </div>
                    </div>
                </div>
            </section> 

    </>
  )
}

export default CarInfo
