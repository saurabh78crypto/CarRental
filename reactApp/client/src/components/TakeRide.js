import React, {useEffect, useState} from 'react'
import { useFormik} from 'formik'
import takeride from '../images/takeride.jpg'
import { rideSchema } from '../schemas'

const initialValues = {selectFromLocation:"",selectToLocation:"",selectVehicle:""};
const TakeRide = () => {
    const [locationList,setLocationList] = useState([]);
    const [vehicleList, setVehicleList] = useState([]);
    const [filteredLocationList, setFilteredLocationList] = useState([]);

    const [selectFromLocation,setSelectFromLocation] = useState('');
    const [selectToLocation,setSelectToLocation] = useState('');
    const [selectVehicle, setSelectVehicle] = useState('');

    // const handleChange = (e) => {
    //   setSelectVehicle(e.target.value);
    //   const {name} = e.target;
    //   if(name === 'selectFromLocation'){
    //     setSelectFromLocation(e.target.value);
    //   }else if(name === 'selectToLocation'){
    //     setSelectToLocation(e.target.value);
    //   }
    // }

    //  Access Location 
    useEffect(() => {
      fetch('/api/auth/getlocationList')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data.locationList)) {
            setLocationList(data.locationList);
          } else {
            console.log('Location list is not an array:', data);
          }
        })
        .catch(error => console.log(error));
    }, []);

    //Filtered List
    useEffect(() => {
      if(selectFromLocation !== ''){
        setFilteredLocationList(locationList.filter(location => location.name !== selectFromLocation));
      }else{
        setFilteredLocationList(locationList);
      }
    },[selectFromLocation, locationList])

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

      //Stored in DB
      const { errors, touched, handleChange,handleSubmit } = useFormik({
        initialValues,
        validationSchema: rideSchema, 
        onSubmit: async () => {
          const res = await fetch('/api/auth/newride',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ selectFromLocation, selectToLocation, selectVehicle })
          });
          const data = await res.json();
          if(data) {
            window.alert('Ride Booked Successfully!');
          }else {
            window.alert('Booking Failed!');
          }
        }
      })  
      
  return (
    <>
      {/* Navbar  */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/Dashboard">Ride-In</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown" >
                  <div className="btn-group dropleft" role="group">
                    <a type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/login">Logout</a>
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
                            <form method="POST" onSubmit={handleSubmit} className="register-form" id="register-form">
                                <p>From</p>
                                <select className="form-control select2 select2-hidden-accessible" style={{width: '100%'}} tabindex="-1" 
                                aria-hidden="true" name='selectFromLocation'
                                 value={selectFromLocation} onChange={e => {setSelectFromLocation(e.target.value)
                                handleChange(e)}}
                                >
                                    <option >--Select--</option>
                                    {locationList.map(selectFromLocation => (
                                      <option key={selectFromLocation._id} value={selectFromLocation.name}> {selectFromLocation.name} </option>
                                    ))}
                                </select>
                                {errors.selectFromLocation && touched.selectFromLocation ? <p className='form-error'>{errors.selectFromLocation}</p> : null}
                                
                                <p className='pt-2'>To</p>
                                <select className="form-control select2 select2-hidden-accessible" style={{width: '100%'}} tabindex="-1" 
                                aria-hidden="true" name='selectToLocation' 
                                value={selectToLocation} 
                                onChange={e => {setSelectToLocation(e.target.value) 
                                  handleChange(e)}}
                                >
                                    <option >--Select--</option>
                                    {filteredLocationList.map(selectToLocation => (
                                      <option key={selectToLocation._id} value={selectToLocation.name}> {selectToLocation.name} </option>
                                    ))}
                                </select>
                                {errors.selectToLocation && touched.selectToLocation ? <p className='form-error'>{errors.selectToLocation}</p> : null}
    
                                <p className='pt-2'>Select Car</p>
                                <select className="form-control select2 select2-hidden-accessible mt-0" style={{width: '100%'}} tabindex="-1" 
                                aria-hidden="true" name='selectVehicle' 
                                value={selectVehicle} onChange={e => {setSelectVehicle(e.target.value)
                                handleChange(e)}}
                                >
                                    <option>--Select--</option>
                                    {vehicleList.map(Vehicle => (
                                        <option key={Vehicle._id} value={Vehicle.model}> {Vehicle.model} </option>
                                    ))}
                                </select>
                                {errors.selectVehicle && touched.selectVehicle ? <p className='form-error'>{errors.selectVehicle}</p> : null}
                            
                                <div className="form-group form-button">
                                        <input type="submit" name="signup" id="signup" className="form-submit" value="Book" />
                                </div>
                                </form>
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
