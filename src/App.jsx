import React from "react";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import Contact from "./components/Contact";
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
      <Contact />
    </div>
  );
}

export default App;
