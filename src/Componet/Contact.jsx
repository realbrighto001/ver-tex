import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>We’d love to hear from you! Fill out the form or reach us through the info below.</p>
          <ul>
            <li><strong>Address:</strong> 123 Vertex Street, Lagos, Nigeria</li>
            <li><strong>Phone:</strong> +234 810 000 0000</li>
            <li><strong>Email:</strong> contact@vertexdigital.com</li>
          </ul>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* === Google Map Embed === */}
      <div className="map-container">
        <iframe
          title="vertex-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6116114245547!2d7.030565674351905!3d4.836562040466106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd94608ab85d%3A0x9bbc2731d7499433!2sOld%20Aba%20Rd%2C%20Port%20Harcourt%20500102%2C%20Rivers!5e0!3m2!1sen!2sng!4v1759521062518!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          height="350"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0, borderRadius: "10px", marginTop: "40px" }}
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
