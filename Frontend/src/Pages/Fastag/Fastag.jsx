import React from "react";
import { FaCar, FaMoneyBillWave, FaGasPump, FaMobileAlt, FaCreditCard } from "react-icons/fa";
import "./Fastag.css";

const Fastag = () => {
  return (
    <div className="fastag-container">
      {/* Banner Section */}
      <div className="fastag-banner">
        <div className="banner-overlay">
          <h2>FASTag Services</h2>
          <p>Make it Cashless and Enjoy your Drive</p>
          <div className="fastag-buttons">
            <button href="/apply" className="btn">New Customer</button>
            <button href="/recharge" className="btn">Existing Customer</button>
          </div>
        </div>
      </div>

      {/* FASTag Information Section */}
      <div className="fastag-info">
        <h2>What is FASTag?</h2>
        <p>
          FASTag is an RFID passive tag used for toll payments directly from your linked 
          bank account. It is placed on your vehicle's windscreen and allows seamless passage 
          through toll plazas without stopping.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="fastag-benefits">
        <h2>FASTag Benefits</h2>
        <div className="benefit-items">
          <div className="benefit">
            <FaCar className="icon" />
            <p>Seamless Travel</p>
          </div>
          <div className="benefit">
            <FaMoneyBillWave className="icon" />
            <p>Cashless Payments</p>
          </div>
          <div className="benefit">
            <FaGasPump className="icon" />
            <p>Fuel Savings</p>
          </div>
          <div className="benefit">
            <FaMobileAlt className="icon" />
            <p>SMS Alerts</p>
          </div>
          <div className="benefit">
            <FaCreditCard className="icon" />
            <p>Easy Recharge</p>
          </div>
        </div>
      </div>

      {/* Apply Now Section */}
      <div className="apply-section">
        <h2>Apply for FASTag Now!</h2>
        <p>Get your FASTag and enjoy hassle-free toll payments.</p>
        <div className="fastag-buttons">
          <a href="/apply" className="btn">New Customer</a>
          <a href="/recharge" className="btn">Existing Customer</a>
        </div>
      </div>
    </div>
  );
};

export default Fastag;
