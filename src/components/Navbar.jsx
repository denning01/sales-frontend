import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

// Props: user = current logged-in user object, setUser = function to update user state
export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user from localStorage
    localStorage.removeItem("user");
    // Update App state
    setUser(null);
    // Redirect to login
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Sales App</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {!user ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li style={{ color: "#00bcd4", fontWeight: "bold" }}>
                Hello, {user.username}
              </li>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
