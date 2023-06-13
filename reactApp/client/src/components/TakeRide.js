import React, {useEffect, useState} from 'react'
import takeride from '../images/takeride.jpg'

const TakeRide = () => {
    const [locationList,setLocationList] = useState([]);
    const [vehicleList, setVehicleList] = useState([]);
    const [selectVehicle, setSelectVehicle] = useState('');
    
    //From
    const [selectFromLocation,setSelectFromLocation] = useState('');
    //To
    const [selectToLocation,setSelectToLocation] = useState('');

    const handleChange = (e) => {
        setSelectVehicle(e.target.value);
        const { name, value } = e.target;
        if (name === 'selectFromLocation') {
          setSelectFromLocation(value);
        } else if (name === 'selectToLocation') {
          setSelectToLocation(value);
        }
    }

    // Access Vehicle List
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

    //  Access Location 
    useEffect(() => {
        fetch('/api/auth/getlocation')
          .then(res => res.json())
          .then(data => {
            if (Array.isArray(data.locationList)) {
              setLocationList(data.locationList);
            } else {
              console.log('Vehicle list is not an array:', data);
            }
          })
          .catch(error => console.log(error));
      }, []);

      //Store all details in DB

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
                            <h2 className="form-title">Take Ride</h2>
                            <form method="POST" className="register-form" id="register-form"></form>
                                <p>From</p>
                                <select class="form-control select2 select2-hidden-accessible" style={{width: '100%'}} tabindex="-1" 
                                aria-hidden="true" name='selectFromLocation' value={selectFromLocation} onChange={e => {setSelectFromLocation(e.target.value)
                                handleChange(e)}}>
                                    <option >--Select--</option>
                                    {locationList.map(LocFrom => {
                                        <option key={LocFrom._id} value={LocFrom.name}> {LocFrom.name} </option>
                                    })}
                                </select>
                                
                                <p className='pt-2'>To</p>
                                <select class="form-control select2 select2-hidden-accessible" style={{width: '100%'}} tabindex="-1" 
                                aria-hidden="true" name='selectToLocation' value={selectToLocation} onChange={e => {setSelectToLocation(e.target.value)
                                handleChange(e)}}>
                                    <option >--Select--</option>
                                    {locationList.map(LocTo => {
                                        <option key={LocTo._id} value={LocTo.name}> {LocTo.name} </option>
                                    })}
                                </select>
    
                                <p className='pt-2'>Select Car</p>
                                <select class="form-control select2 select2-hidden-accessible mt-0" style={{width: '100%'}} tabindex="-1" 
                                aria-hidden="true" name='selectVehicle' value={selectVehicle} onChange={e => {setSelectVehicle(e.target.value)
                                handleChange(e)}}>
                                    <option>--Select--</option>
                                    {vehicleList.map(Vehicle => (
                                        <option key={Vehicle._id} value={Vehicle.model}> {Vehicle.model} </option>
                                    ))}
                                </select>
                            
                                <div className="form-group form-button">
                                        <input type="submit" name="book" id="book" className="form-submit" value="Book" />
                                </div>
                            <form/>
                        </div>
                        <div className="signup-image">
                            <figure><img src={takeride} alt="sing up image" /></figure>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default TakeRide
