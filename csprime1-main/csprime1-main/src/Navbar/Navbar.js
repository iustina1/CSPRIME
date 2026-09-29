import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">CSPRIME</div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>☰</div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/modules">MODULES</Link></li>
        <li><Link to="/topics">TOPICS</Link></li>
        <li><Link to="/analytics">ANALYTICS</Link></li>

        {/* Dropdown Menu */}
        <li 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropbtn">▾</span>
          <ul className={dropdownOpen ? "dropdown-content show" : "dropdown-content"}>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/auth">LOGIN/SIGNUP</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
