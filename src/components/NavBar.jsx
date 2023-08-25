import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image 1logo resp.svg";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  //adding the states
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //function to clean up de acitveClass
  const removeActive = () => {
    setIsActive(false);
  };

  //navBarComponent
  return (
    <header className={`${styles.header}`}>

      <nav className={`${styles.navbar}`}>
       
          <img src={Logo} alt="logo-data" className={`${styles.logo}`}></img>
       
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link to="/" className={`${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/services" className={`${styles.navLink}`}>
                Services
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className={`${styles.navLink}`}>
                About
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/careers" className={`${styles.navLink}`}>
                Careers
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/contact" className={`${styles.navLink}`}>
                Contact
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/solutions" className={`${styles.navLink}`}>
                Solutions
              </Link>
            </li>
          </ul>
        
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleActiveClass}
        >
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
