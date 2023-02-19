import React from 'react';
import './navbar.css';
import logo from '../images/airbnb-logo.png';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} className="logoImg" alt="airbnb" />
    </nav>
  );
};

export default Navbar;
