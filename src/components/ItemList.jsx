import React, { useEffect, useState } from "react";
import "../App.css";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/sales")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <section id="items" className="container">
      <h2 className="title">Available Items</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.item} />
            <div className="item-details">
              <h3 className="item-name">{item.item}</h3>
              <p className="item-description">{item.description}</p>
              <p className="item-price">Ksh {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
