import React from "react";
import hero from '/assets/Images/main-img.png';
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="main">
      <div className="main-image">
        <img src={hero} alt="Main" />
      </div>
      <div className="main-head">
        <h1>
          <span> Everywhere </span>
          <br />
          for <span> Everyone </span>
        </h1>
        <p className="main-body">
          One location for all Emergency Services. Access all services with one click from anywhere.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;