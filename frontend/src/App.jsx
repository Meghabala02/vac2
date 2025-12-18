import React from 'react'
import User from './components/User'
import State from './hooks/State'
import Form from './hooks/Form'
import { Router } from 'react-router-dom'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
       <Route path="/services" element={<Services/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <h1>App </h1>
    <Form/>
    <State/>
     <User name="Megha" age={18}/>
    </div>

 
  )
}

export default App