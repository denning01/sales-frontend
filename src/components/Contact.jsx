import React, { useState } from "react";
import "../App.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Here you could send it to your backend API using fetch()
    // e.g. fetch("http://localhost:8080/contact", { method: "POST", ... })

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-info">
          Feel free to reach out with any inquiries, feedback, or opportunities.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        ) : (
          <p className="thank-you">✅ Thank you! Your message has been sent.</p>
        )}

        <div className="social-links">
          <a
            href="mailto:gichabadenning254@gmail.com"
            className="social-link"
          >
            Email
          </a>
          <a href="tel:+254759316941" className="social-link">
            Call
          </a>
          <a
            href="https://github.com/denning01"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/denning-gichaba-1804b022b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
