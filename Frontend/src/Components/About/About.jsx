import React from "react";
import "./About.css";
import Instructions from "../Instructions/Instructions";

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="fadeInUp about-quote">
        "In emergencies, safety isn't an option; it's a necessity we uphold with unwavering dedication."
      </h1>

      <h1 className="fadeInUp about-heading">Welcome To E-Seva Portal</h1>
      <p className="fadeInUp about-text">
        "E-Seva" means 'Emergency Services at your place itself', i.e., providing citizens with urgent services when they need them the most. 
        In times of crisis, every second counts, and at E-Seva, we ensure seamless and quick emergency response.
      </p>

      <h1 className="fadeInUp about-heading">Our Mission</h1>
      <p className="fadeInUp about-text">
        E-Seva is dedicated to  swift and efficient emergency response , ensuring citizens receive critical assistance promptly. 
        Our mission is to  minimize response times and maximize support  through a 24/7 user-friendly platform. 
        With comprehensive emergency services,  cutting-edge location-based technology , and strict  data security , 
        E-Seva brings safety, security, and immediate assistance to your doorstep.  
      </p>

      <Instructions />
    </div>
  );
};

export default About;
