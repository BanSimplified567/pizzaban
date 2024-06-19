import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import PizzaBanLogo from '../../img/logo.png';
import './Style/Navbar.css';

function Navbar() {
   const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
      if (darkMode) {
         document.body.classList.add('dark-theme');
      } else {
         document.body.classList.remove('dark-theme');
      }
   }, [darkMode]);

   const toggleMode = () => {
      setDarkMode((prevMode) => !prevMode);
   };

   return (
      <header className="navLinkHeader container section ">
         <NavLink to="/" className="n-NameLogo">
            <img src={PizzaBanLogo} alt="Logo" className="home__img" />
            <h1 className="nav__logo">PizzaBan</h1>
         </NavLink>
         <nav className="navLinkPathname">
            <NavLink to="/" className="navLink">
               Home
               <span className="tooltip-text">Go to Home</span>
            </NavLink>
            <NavLink to="/menu" className="navLink">
               Menu
               <span className="tooltip-text">See our Menu</span>
            </NavLink>
            <NavLink to="/service" className="navLink">
               Service
               <span className="tooltip-text">Our Services</span>
            </NavLink>
            <NavLink to="/about" className="navLink">
               About
               <span className="tooltip-text">About Us</span>
            </NavLink>
            <NavLink to="/contact" className="navLink">
               Contact
               <span className="tooltip-text">Contact Us</span>
            </NavLink>
            <div className="navbar-LogoIcon">
               <NavLink to="/cart" className="navLink">
                  <svg
                     width={26}
                     height={26}
                     fill="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M17.438 7.5v-.563A5.444 5.444 0 0 0 12.136 1.5h-.272a5.444 5.444 0 0 0-5.302 5.438V7.5H2.438a.187.187 0 0 0-.187.188V21.75a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 .75-.75V7.687a.188.188 0 0 0-.188-.187h-4.125Zm-1.875 0H8.436v-.516c0-1.96 1.567-3.588 3.528-3.609a3.566 3.566 0 0 1 3.598 3.563V7.5Z"></path>
                  </svg>
                  <span className="tooltip-text">View Cart</span>
               </NavLink>
               <NavLink to="/account" className="navLink">
                  <svg
                     width={26}
                     height={26}
                     fill="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M4 22a8 8 0 0 1 16 0H4Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6Z" />
                  </svg>
                  <span className="tooltip-text">My Account</span>
               </NavLink>
               <button onClick={toggleMode} className="darkmode">
                  {darkMode ? <DarkModeIcon /> : <Brightness5Icon />}
               </button>
            </div>
         </nav>
      </header>
   );
}

export default Navbar;
