import React, { useEffect, useState } from "react";
import "../App.css";

export default function ItemList({ user }) {
  const [items, setItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItem, setEditedItem] = useState({});

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

  // Delete / Buy item
  const handleBuy = (id) => {
    fetch(`http://localhost:8080/sales/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Purchase successful!");
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

  // Enable edit mode
  const handleEdit = (item) => {
    setEditingItemId(item.id);
    setEditedItem({ ...item });
  };

  // Update field in edit mode
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({ ...prev, [name]: value }));
  };

  // Save edited item to backend
  const handleSave = (id) => {
    fetch(`http://localhost:8080/sales/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedItem),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to update item");
      })
      .then((updatedItem) => {
        setItems((prev) =>
          prev.map((item) => (item.id === id ? updatedItem : item))
        );
        setEditingItemId(null);
        alert("Item updated successfully!");
      })
      .catch((err) => console.error("Error updating item:", err));
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingItemId(null);
  };

  return (
    <section id="items" className="container">
      <h2 className="title">Available Items</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            {editingItemId === item.id ? (
              <>
                <input
                  type="text"
                  name="item"
                  value={editedItem.item}
                  onChange={handleChange}
                  className="edit-input"
                  placeholder="Item Name"
                />
                <input
                  type="text"
                  name="description"
                  value={editedItem.description}
                  onChange={handleChange}
                  className="edit-input"
                  placeholder="Description"
                />
                <input
                  type="number"
                  name="price"
                  value={editedItem.price}
                  onChange={handleChange}
                  className="edit-input"
                  placeholder="Price"
                />
                <input
                  type="text"
                  name="image"
                  value={editedItem.image}
                  onChange={handleChange}
                  className="edit-input"
                  placeholder="Image URL"
                />
                <div className="edit-buttons">
                  <button onClick={() => handleSave(item.id)} className="save-button">
                    Save
                  </button>
                  <button onClick={handleCancel} className="cancel-button">
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <img src={item.image} alt={item.item} />
                <div className="item-details">
                  <h3 className="item-name">{item.item}</h3>
                  <p className="item-description">{item.description}</p>
                  <p className="item-price">Ksh {item.price}</p>

                  {/* 👇 Only show buttons if user is logged in */}
                  {user && (
                    <div className="button-group">
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="buy-button"
                        onClick={() => handleBuy(item.id)}
                      >
                        Buy
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* 👇 Message shown when user is not logged in */}
      {!user && (
        <p style={{ textAlign: "center", marginTop: "20px", color: "gray" }}>
          Please <a href="/login">login</a> or <a href="/register">register</a> to edit or buy items.
        </p>
      )}
    </section>
  );
}
