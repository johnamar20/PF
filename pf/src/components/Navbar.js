import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    const [click,setClick]=useState(false);
    const closemobilemenu = () => setClick(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="logo">
            <div className="Text">nutZ</div>
            <i className="far fa-acorn" />
            
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' :'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li className='nav-items'>
            <Link to="/" className="nav-links" onClick={closemobilemenu}>
                Home
            </Link>
            </li>
            <li className='nav-items'>
            <Link  to="/Services" className="nav-links" onClick={closemobilemenu}>
            Services
            </Link>
            </li>
            <li className="nav-items" >
            <Link to="/Products" className="nav-links" onClick={closemobilemenu}>
                Products
            </Link>
            </li>
            <li className="nav-items" >
            <Link to="/Signup"  onClick={closemobilemenu}>
                <button className="btn">Sign up</button>
            </Link>
            </li>
            </ul>
            </div>
            </nav>
        </>
    )
}

export default Navbar;
