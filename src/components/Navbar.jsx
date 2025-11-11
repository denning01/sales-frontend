import React from "react";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Sales App</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#items">Items</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
