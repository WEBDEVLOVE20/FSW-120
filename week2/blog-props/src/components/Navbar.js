import React from 'react'
import './navbar.css';

function Navbar() {
    return (
        <div className="navbarContainer">
            <a className="startBootstrap" href="#">Start Bootstrap</a>
            <a className="navbarOptions" href="#">HOME</a>
            <a className="navbarOptions" href="#">ABOUT</a>
            <a className="navbarOptions" href="#">SAMPLE POST</a>
            <a className="navbarOptions" href="#">CONTACT</a>
        </div>
    )
}

export default Navbar