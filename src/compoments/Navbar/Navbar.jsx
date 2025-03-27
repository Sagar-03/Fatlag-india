import React from 'react'
import './Navbar.css'
import logo from '..//../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      
      <img src={logo} alt='' className='logo' /> 
      <a className='navbar-brand' >Export Import</a>   
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
      </nav>
  )
}

export default Navbar
