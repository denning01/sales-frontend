import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddItemPage({ user }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    item: "",
    price: "",
    description: "",
    image: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!user) {
      setError("You must be logged in to add an item.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add item");

      setSuccess("Item added successfully!");
      setFormData({ item: "", price: "", description: "", image: "" });

      // Redirect after success
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      console.error("Error adding item:", err);
      setError("Failed to add item. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Add a New Item</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="item"
          placeholder="Item Name"
          value={formData.item}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Item</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}
