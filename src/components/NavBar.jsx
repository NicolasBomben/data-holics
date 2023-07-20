import React from 'react';
import { Link } from 'react-router-dom';
import  logoData from '../assets/logoData.png';

import "./navbar.css"

const Navbar = () => {

    return(
        <header className="header">
            <img  className="logo"src={ logoData } alt="logo holics"></img>
            <nav>
            <ul className='ul-nav'>
                <li className='li-nav'>
                    <Link to="/">Home</Link>
                </li>
                <li className='li-nav'>
                    <Link to="/services">Services</Link>
                </li>
                <li className='li-nav'>
                    <Link to ="/about">About</Link>
                </li>
                <li className='li-nav'>
                    <Link to="/careers">Careers</Link>
                </li>
                <li className='li-nav'>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className='li-nav'>
                    <Link to="/solutions">Solutions</Link>
                </li>
            </ul>
        </nav>

        </header>
        
    )

}

export default Navbar;