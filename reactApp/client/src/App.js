import React from 'react'
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import RegUser from './components/RegUser'
import RegVechile from './components/RegVehicle'
import Login from './components/Login'
import ErrorPage from './components/ErrorPage'

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/contact'>
            <Contact/>
          </Route>

          <Route path='/reguser'>
            <RegUser/>
          </Route>

          <Route path='/regvehicle'>
            <RegVechile/>
          </Route>

          <Route path='/login'>
            <Login/>
          </Route>

          <Route>
            <ErrorPage/>
          </Route>
      </Switch>
    </>
  )
}

export default App
