import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logoDataDos.svg";
import "./navbar.css";

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img className="img-logo" src={logo} alt="data-holics-logo" />
      <nav ref={navRef}>
        <a>
          <Link to="/">Home</Link>
        </a>
		<a>
          <Link to="/services">Services</Link>
        </a>
		<a>
          <Link to="/about">About</Link>
        </a>
		<a>
          <Link to="/contact">Contact</Link>
        </a>
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
