import React from "react";
import "../App.css"; // so it can use your global styles

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-info">
          <strong>Email:</strong>{" "}
          <a href="mailto:gichabadenning254@gmail.com">
            gichabadenning254@gmail.com
          </a>
          <br />
          <strong>Phone:</strong> +254 759 316 941
        </p>
        <div className="social-links">
          <a
            href="https://github.com/denning01"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/denning-gichaba-1804b022b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
