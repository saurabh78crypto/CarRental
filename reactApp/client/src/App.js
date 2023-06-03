import React from 'react'
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import RegUser from './components/RegUser'
import RegVechile from './components/RegVehicle'
import Login from './components/Login'
import ErrorPage from './components/ErrorPage'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <>
      <Switch>
          <Route path='/login'>
            <Login/>
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

          <Route>
            <ErrorPage/>
          </Route>
      </Switch>
    </>
  )
}

export default App
