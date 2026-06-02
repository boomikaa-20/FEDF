import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#082C4A",
        padding: "25px",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          listStyle: "none",
        }}
      >
        <li><Link style={{ color: "white" }} to="/">Home</Link></li>
        <li><Link style={{ color: "white" }} to="/about">About Us</Link></li>
        <li><Link style={{ color: "white" }} to="/contact">Contact Us</Link></li>
        <li><Link style={{ color: "white" }} to="/login">Login</Link></li>
        <li><Link style={{ color: "white" }} to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;