import React from "react";
import "../App.css"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* === Column 1: Brand === */}
        <div className="footer-col">
          <h2 className="footer-logo">VerteX</h2>
          <p className="footer-text">
            Building digital experiences that empower your brand and connect you to the world.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* === Column 2: Quick Links === */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* === Column 3: Courses === */}
        <div className="footer-col">
          <h3>Courses</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Data Analysis</a></li>
            <li><a href="#">Cyber Security</a></li>
            <li><a href="#">Graphics Design</a></li>
          </ul>
        </div>

        {/* === Column 4: Newsletter === */}
        <div className="footer-col newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get updates on our latest courses and offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} VerteX Digitals. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
