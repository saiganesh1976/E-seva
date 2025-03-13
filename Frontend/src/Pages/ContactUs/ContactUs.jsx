import React from "react";
import "./ContactUs.css";
import favicon from '/assets/Images/favicon.png';

const Contact = () => {
  return (
    <div className="wrapper-section">
      <div className="title">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-section">
        <div className="contact">
          <div className="contact-item">
            <div className="call-left">
              📞
            </div>
            <div className="right">
              <p>Phone Number: +91 630 527 9018</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="call-left">
              📍
            </div>
            <div className="right">
              <p>Address: Sreenidhi Institute of Science and Technology</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="call-left">
              📧
            </div>
            <div className="right">
              <p>Email: name@Example.gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <img src={favicon} alt="Favicon" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
