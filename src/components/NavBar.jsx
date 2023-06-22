import React from 'react';
import { Link } from 'react-router-dom';
import  logoDataholics from '../assets/logoDataholics.png';

import "./navbar.css"

const Navbar = () => {

    return(
        <header className="header">
            <img  className="logo"src={ logoDataholics } alt="logo holics"></img>
            <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to ="/about">About</Link>
                </li>
                <li>
                    <Link to="/careers">Careers</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/solutions">Solutions</Link>
                </li>
            </ul>
        </nav>

        </header>
        
    )

}

export default Navbar;