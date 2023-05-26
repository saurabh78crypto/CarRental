import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import RegUser from './components/RegUser'
import RegVechile from './components/RegVehicle'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <Navbar/>
      
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
    </>
  )
}

export default App
