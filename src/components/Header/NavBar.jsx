import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoData from "../../assets/DataLogo.svg";
import "./navbar.css";

const NavBar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">

      <Link to="/">
        <img className="img-logo" src={LogoData} alt="data-holics-logo" />
      </Link>
      
      <nav ref={navRef} className={isOpen ? "responsive_nav" : ""}>
        <Link className="nav-links" to="/" onClick={closeNavbar}>
          Home
        </Link>

        <Link className="nav-links" to="/services" onClick={closeNavbar}>
          Services
        </Link>

        <Link className="nav-links" to="/contact" onClick={closeNavbar}>
          Contact
        </Link>

        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
