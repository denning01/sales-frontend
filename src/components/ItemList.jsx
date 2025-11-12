import React, { useEffect, useState } from "react";
import "../App.css";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  // Fetch all items
  const fetchItems = () => {
    fetch("http://localhost:8080/sales")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  };

  // Handle buying/deleting an item
  const handleBuy = (id) => {
    fetch(`http://localhost:8080/sales/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Purchase successful!");
          // Remove the item from state to update UI
          setItems(items.filter((item) => item.id !== id));
        } else {
          alert("Failed to purchase item.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error while purchasing.");
      });
  };

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
              <button
                className="buy-button"
                onClick={() => handleBuy(item.id)}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
