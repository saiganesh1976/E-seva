import React from "react";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import favicon from "/assets/Images/favicon.png";
import safety_icon from "/assets/Images/safety.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <div className="container">
          {/* Logo & Title */}
          <div className="footer-text">
            <img src={favicon} alt="logo" />
            <p>
              E-SEVA <span className="subtitle">Safety & Services</span>
            </p>
          </div>

          {/* About E-Seva */}
          <div className="about-section">
            <h4>About E-Seva</h4>
            <p>
              E-Seva is a one-stop platform providing emergency safety and 
              essential services at your fingertips. Access medical, police, 
              fire, and other crucial services instantly from anywhere.
            </p>
          </div>

          {/* Safety Icon */}
          <div className="safety-icon">
            <img src={safety_icon} alt="india-logo" />
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <h4>Our Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="/grievences">Grievances</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contactus">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Handles */}
          <div className="handles">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" target="_blank"><FaXTwitter size={28} /></a>
              <a href="#" target="_blank"><FaFacebook size={28} /></a>
              <a href="#" target="_blank"><FaInstagram size={28} /></a>
            </div>
          </div>
        </div>

        <hr />

        {/* Footer Credits */}
        <div className="credits">
          <ul>
            <li><a href="#">Copyright &copy; 2024 All rights reserved</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">&copy; Sai Ganesh Ratnala</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
