import React from "react";
import "./About.css";
import Instructions from "../Instructions/Instructions";

const About = () => {
  return (
    <div id="about" className="about">
      <h1 style={{ color: "white", margin: "2rem 0" }} className="fadeInUp">
        "In emergencies, safety isn't an option; it's a necessity we uphold with
        unwavering dedication."
      </h1>
      <br />
      <br />
      <h1 className="fadeInUp">Welcome To E-Seva Portal</h1>
      <p className="fadeInUp">
        "E-Seva" in means, 'Emergency Services at your place itself', i.e.
        service to citizens who are in urgent need of services. In times of
        crisis, every second counts, and at E-Seva, we understand the critical
        importance of swift and efficient emergency response. Our portal is
        designed with a singular focus: to connect you seamlessly with the
        emergency services you need when it matters the most.
      </p>
      <br />
      <br />
      <h1 className="fadeInUp">Our Mission</h1>
      <p className="fadeInUp">
        E-Seva is dedicated to swift and efficient emergency response, ensuring
        citizens receive critical assistance promptly. In moments of crisis, our
        mission is to minimize response times and maximize support. We provide a
        user-friendly platform, accessible 24/7, offering comprehensive
        emergency services ranging from medical aid to law enforcement. Our
        commitment lies in instant connectivity, utilizing cutting-edge
        technology for accurate location-based services while prioritizing the
        security and confidentiality of user information. E-Seva is your
        reliable partner during emergencies, where every second counts. Trust us
        to bring safety, security, and immediate assistance directly to your
        doorstep. Your well-being is our unwavering mission.
      </p>
      <Instructions/>
    </div>
  );
};

export default About;
