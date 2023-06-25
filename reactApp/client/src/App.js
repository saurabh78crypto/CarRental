import React from 'react'
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import RegUser from './components/RegUser'
import RegVechile from './components/RegVehicle'
import Login from './components/Login'
import ErrorPage from './components/ErrorPage'
import Dashboard from './components/Dashboard'
import AddDriver from './components/AddDriver'
import CarInfo from './components/CarInfo'
import TakeRide from './components/TakeRide'
import AddLocation from './components/AddLocation'
import CarStatus from './components/CarStatus'
import Service from './components/Service'
import Home from './components/Home'
import LoginDriver from './components/LoginDriver'

const App = () => {
  return (
    <>
      <Switch>

      {/* <Route path='/'>
            <Home/>
          </Route> */}

          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/'>
            <LoginDriver/>
          </Route>

          <Route path='/dashboard'>
            <Dashboard/>
          </Route>
          
          <Route path='/reguser'>
            <RegUser/>
          </Route>

          <Route path='/regvehicle'>
            <RegVechile/>
          </Route>

          <Route path='/adddriver'>
            <AddDriver/>
          </Route>

          <Route path='/carinfo'>
            <CarInfo/>
          </Route>

          <Route path='/takeride'>
            <TakeRide/>
          </Route>

          <Route path='/addlocation'>
            <AddLocation/>
          </Route>

          <Route path='/carstatus'>
            <CarStatus/>
          </Route>

          <Route path='/service'>
            <Service/>
          </Route>

          <Route>
            <ErrorPage/>
          </Route>
      </Switch>
    </>
  )
}

export default App
