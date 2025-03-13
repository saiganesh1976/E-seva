import React from "react";
import "./Petrol.css";
import { Link } from "react-router-dom";
import fuelImg from "/assets/Images/petrol/fuel.png";
import mechanicImg from "/assets/Images/petrol/mechanic.png";
import evImg from "/assets/Images/petrol/ev.png";
import flatImg from "/assets/Images/petrol/flat.png";
import towingImg from "/assets/Images/petrol/towing.png";
import tcIcon from "/assets/Images/petrol/t&c.svg";
import petrolBanner from "/assets/Images/petrol/petrol-banner.png";

const Petrol = () => {
  return (
    <div className="petrol-container">
      {/* Header Section */}
      <div className="petrol-header-wrapper" style={{ backgroundImage: `url(${petrolBanner})` }}>
        <div className="page-header petrol">
          <h2>Petrol Services</h2>
          <p>Call Us Now for Petrol Services</p>
          <button className="general-btn">
            <Link to="/petrolbook">Book Now</Link>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="wrapper-section">
        <div className="title">
          <h1>Petrol Services</h1>
        </div>

        <div className="services-content-section">
          <p>
            Emergency fuel delivery is a critical service for those stranded on
            the road due to an empty tank. Never fret again when you find yourself
            without fuel. We provide convenient delivery of 2 to 5 liters of petrol or diesel 
            directly to your location. 
          </p>

          <h1>Our Services</h1>
          <div className="services-petrol">
            <div>
              <img src={fuelImg} alt="Fuel Delivery" className="petrol-img" />
              <p>Fuel Delivery</p>
            </div>
            <div>
              <img src={mechanicImg} alt="Mechanic" className="petrol-img" />
              <p>Mechanic</p>
            </div>
            <div>
              <img src={evImg} alt="EV Charging" className="petrol-img" />
              <p>EV Charging</p>
            </div>
            <div>
              <img src={flatImg} alt="Flat Tyres" className="petrol-img" />
              <p>Flat Tyres</p>
            </div>
            <div>
              <img src={towingImg} alt="Towing" className="petrol-img" />
              <p>Towing</p>
            </div>
          </div>

          {/* Booking Section */}
          <div className="petrol-booking">
            <h1>Book Now!</h1>
            <p>Welcome to Online Petrol Delivery Service! To book your petrol
               delivery, please provide the following information.</p>
            <button className="general-btn">
              <Link to="/petrolbook">Book Now</Link>
            </button>
          </div>

          {/* Terms and Conditions Section */}
          <div className="tc-box">
            <div className="tc-header">
              <h2>Important Guidelines</h2>
            </div>
            <div className="tc-content">
              <div>
              <img src={tcIcon} alt="T&C Icon" className="tc-icon" />
              </div>
              <ul className="tc-list">
              <li>✅ Carry Original ID proof</li>
              <li>✅ Provide genuine data for booking</li>
              <li>✅ Cancellation charges apply after 30 minutes</li>
              <li>✅ Additional charges for spares, consumables, and taxes</li>
              <li>✅ Late night charges are included</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petrol;
