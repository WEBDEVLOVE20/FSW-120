import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../providers/AuthProvider';
import './navbar.css';

const Navbar = ({handleUserLogout}) => {

  return (
    <div>
      <ul className='navbar-container'>
        <Link to='/' className='links'> Home </Link>
        <Link to='/tweets' className='links'> Tweets </Link> 
        <Link to='/login' className='links'> Log in </Link>
        <Link to='/login'><button className='logout-button' onClick={handleUserLogout}> Log out </button> </Link>
      </ul>
    </div>
  );
}

export default withAuth(Navbar);