import React from 'react'
import takeride from '../images/takeride.jpg'

const TakeRide = () => {
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
                                <select class="form-control select2 select2-hidden-accessible" style={{width: '100%'}} tabindex="-1" aria-hidden="true">
                                    <option selected="selected">--Select--</option>
                                    <option>Swift Desire</option>
                                    <option>Wagnor</option>
                                    <option>Ertiga</option>
                                    <option>Innova</option>
                                    <option>Maranzo</option>
                                </select>
                                
                                <p className='pt-2'>To</p>
                            
                                <select class="form-control select2 select2-hidden-accessible mt-0" style={{width: '100%'}} tabindex="-1" aria-hidden="true">
                                    <option selected="selected">--Select--</option>
                                    <option>Swift Desire</option>
                                    <option>Wagnor</option>
                                    <option>Ertiga</option>
                                    <option>Innova</option>
                                    <option>Maranzo</option>
                                </select>
    
                                <p className='pt-2'>Select Car</p>
                            
                                <select class="form-control select2 select2-hidden-accessible mt-0" style={{width: '100%'}} tabindex="-1" aria-hidden="true">
                                    <option selected="selected">--Select--</option>
                                    <option>Swift Desire</option>
                                    <option>Wagnor</option>
                                    <option>Ertiga</option>
                                    <option>Innova</option>
                                    <option>Maranzo</option>
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
