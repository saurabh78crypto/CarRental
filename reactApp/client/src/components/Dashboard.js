
import React from 'react'
import '../css/Dashboard.css'
import addCar from '../images/addcar.png'
import addDriver from '../images/adddriver.png'
import carRide from '../images/carride.png'
import route from '../images/route.png'
import service from '../images/service.png'
import status from '../images/status.png'
import carInfo from '../images/carinfo.png'

const Dashboard = () => {
  return (
    <>
        {/* Navbar  */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Ride-In</a>
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
    
        {/* card */}
        <div className="row">

            <div className='col-2 m-3 border border'>
                <a href="/RegVehicle" className=' text-center'> 
                <img src={addCar} alt="" srcset="" className='pl-4'/>
                <div >
                    Add Car
                </div>
                </a>
            </div>

            <div className='col-2 m-3 border'>
                <a href="/AddDriver"> 
                <img src={addDriver} alt="" />
                 <div className=' text-center'>
                    Add Driver
                </div>
                </a>
            </div>

            <div className='col-2 m-3 border'>
                <a href="/CarInfo"> 
                <img src={carInfo} alt="" srcset="" className='pl-4' />
                 <div className=' text-center'>
                    Car Info
                </div>
                </a>
            </div>

            <div className='col-2 m-3 border'>
                <a href="/CarRide"> 
                <img src={carRide} alt="" srcset="" className='pl-4' />
                 <div className=' text-center'>
                    Car Ride
                </div>
                </a>
            </div>

            <div className='col-2 m-3 border'>
                <a href="/CarStatus"> 
                <img src={status} alt="" srcset="" className='pl-4' />
                 <div className=' text-center'>
                    Show Car Status
                </div>
                </a>
                
            </div>

            <div className='col-2 m-3 border'>
                <a href="/Service"> 
                <img src={service} alt="" srcset="" className='pl-4' />
                 <div className=' text-center'>
                    Service
                </div>
                </a>
            </div>

            <div className='col-2 m-3 border'>
                <a href="/AddRoutes"> 
                <img src={route} alt="" />
                 <div className=' text-center'>
                    Add Routes
                </div>
                </a>
            </div>
        </div>

    </>
  )}

export default Dashboard
