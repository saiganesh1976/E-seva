import React from "react";
import "./Announcements.css";
import img from "/assets/Images/new.gif";

const Announcements = () => {
  return (
    <div className="notice">
      <div className="announcement">
        <p>
          <img src={img} alt="new" className="new-icon" />
          Welcome to E-Seva Portal - Your one-stop solution for emergency services.
          <img src={img} alt="new" className="new-icon" />
          Available services:
          <span className="services">
            Blood Bank, Ambulance, Police, Petrol, FASTag, Fire Services.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Announcements;
