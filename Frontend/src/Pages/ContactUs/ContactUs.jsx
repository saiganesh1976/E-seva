import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./ContactUs.css";
import favicon from "/assets/Images/favicon.png";

const Contact = () => {
  return (
    <div className="wrapper-section">
      <div className="title">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-section">
        <div className="contact">
          <div className="contact-item">
            <div className="icon">
              <FaPhoneAlt size={24} color="#3aafa9" />
            </div>
            <div className="contact-text">
              <p>Phone: <span>+91 630 527 9018</span></p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <FaMapMarkerAlt size={24} color="#3aafa9" />
            </div>
            <div className="contact-text">
              <p>Address: <span>Sreenidhi Institute of Science and Technology</span></p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <FaEnvelope size={24} color="#3aafa9" />
            </div>
            <div className="contact-text">
              <p>Email: <span>name@example.com</span></p>
            </div>
          </div>
        </div>
        <div className="favicon-container">
          <img src={favicon} alt="Favicon" className="favicon-img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
