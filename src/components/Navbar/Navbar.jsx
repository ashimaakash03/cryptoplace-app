//import React from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="inr">INR</option>
          <option value="jpy">JPY</option>
        </select>
        <button>
          Sign Up <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
