import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import Contact from "./components/Contact";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";

function App() {
  // App-level user state
  const [user, setUser] = useState(null);

  // Load user from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <Router>
      {/* Navbar receives user and setUser */}
      <Navbar user={user} setUser={setUser} />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <section id="home" className="container">
                <h1 className="title">Welcome to Sales App</h1>
                <p style={{ textAlign: "center" }}>
                  Explore our latest products below.
                </p>
              </section>
              <ItemList />
            </div>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Login Page */}
        <Route
          path="/login"
          element={<LoginPage setUser={setUser} />}
        />

        {/* Register Page */}
        <Route
          path="/register"
          element={<RegisterPage setUser={setUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
