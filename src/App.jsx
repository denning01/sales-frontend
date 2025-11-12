import React from "react";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="container">
        <h1 className="title">Welcome to Sales App</h1>
        <p style={{ textAlign: "center" }}>
          Explore our latest products below.
        </p>
      </section>
      <ItemList />
      <br />
      <section id="contact" className="container">
        <h2 className="title">Contact Us</h2>
        <p style={{ textAlign: "center" }}>
          Email: gichabadenning254@gmail.com| Phone: +254 759316941
        </p>
      </section>
    </div>
  );
}

export default App;
