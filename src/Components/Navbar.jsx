import React from "react";
import "../Components/Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="Navbar">
        <Link id="Logo" to="/">
        <span>AXCEL</span>SOFT
        </Link>
        <ul>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/About">ABOUT</NavLink>
          <NavLink to="/Skills">SKILLS</NavLink>
          <NavLink to="/Work">WORK</NavLink>
          <NavLink to="/Testimonial">TESTIMONIAL</NavLink>
          <NavLink to="/Pricing">PRICING</NavLink>
          <NavLink to="/Contact">CONTACT</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
