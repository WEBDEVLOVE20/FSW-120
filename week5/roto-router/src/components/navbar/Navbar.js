import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar-container' >
      <ul className='navbar-links-container'>
        <Link className='navbar-links' to='/'> Home </Link>
        <Link className='navbar-links' to='about'> About </Link>
        <Link className='navbar-links' to='services'> Services </Link>
      </ul>
    </div>
  )
}

export default Navbar;