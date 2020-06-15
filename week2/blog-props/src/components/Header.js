import React from 'react'
import Navbar from './Navbar'
import './header.css';

function Header() {
    return (
        <div className="headercontainer">
            <Navbar />
            <h1 className="cleanBlog">Clean Blog</h1>
            <h4 className="smallerHeading">A Blog Theme by Start Bootstrap</h4>
        </div>
    )
}

export default Header