import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-logo">
        <button className="founderpro-button">FounderPro</button>
      </div>

      {/* Right Section */}
      <ul className="navbar-links">
        <li><Link to="/">Leaderboard</Link></li>
        <li><Link to="/competition">Competitions</Link></li>
        <li><Link to="/login">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
