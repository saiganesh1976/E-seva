import React from "react";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import favicon from '/assets/Images/favicon.png';
import safety_icon from '/assets/Images/safety.png';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <div className="container">
          <div className="footer-text">
            <img src={favicon} alt="logo" width="100px" height="100px" />
            <p> E-SEVA <span className="subtitle">Safety & Services</span> </p>
          </div>
          <img src={safety_icon} alt="india-logo" width="150px" height="150px" />
          <div className="footer-links">
            <h4>Our Links</h4>
            <ul>
              <li><a href="#">&gt; Home</a></li>
              <li><a href="#">&gt; About</a></li>
              <li><a href="/grievences">&gt; Grievences</a></li>
              <li><a href="/gallery">&gt; Gallery</a></li>
              <li><a href="/contactus">&gt; Contact Us</a></li>
            </ul>
          </div>
          <div className="handles">
            <h4>Contact us</h4>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><FaXTwitter size={32} color="#3aafa9" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook size={32} color="#3aafa9" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram size={32} color="#3aafa9" /></a>
            </div>
          </div>
        </div>
        <hr style={{ color: "grey" }} />
        <div className="credits">
          <ul>
            <li><a href="#">Copyright &copy; 2024 All rights reserved</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">&copy; Saiganesh Ratnala</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;