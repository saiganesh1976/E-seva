import React from "react";
import "./Fire.css";
import { FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Fire = () => {
  return (
    <div className="fire-container">
      {/* Header Section */}
      <div className="fire-header-wrapper">
        <div className="page-header Fire">
          <h2>Fire Services</h2>
          <p>Call Us Now for emergency Fire Services</p>
          <button className="general-btn">
            <a href="tel:+916305279018"><FaPhoneAlt/> Call Now</a>
          </button>
        </div>
      </div>

      {/* Fire Services Content */}
      <div className="wrapper-section">
        <div className="title">
          <h1>Fire Services</h1>
        </div>
        <div className="services-content-section">
          <p>
            Fire Safety Services are dedicated to protecting lives, property,
            and the environment from the devastating effects of fires and other
            emergencies. With a proud history of service to our community, we
            are committed to excellence in fire prevention, emergency response,
            and community outreach.
          </p>

          {/* What We Do */}
          <h1>What We Do</h1>
          <div className="fire-images">
            {[
              { img: "/assets/Images/fire/supress.jpg", text: "Fire Suppression" },
              { img: "/assets/Images/fire/emergency.png", text: "Emergency Medical Services" },
              { img: "/assets/Images/fire/prevention.jpg", text: "Fire Prevention" },
              { img: "/assets/Images/fire/community.jpg", text: "Community Outreach" },
            ].map((item, index) => (
              <div className="item" key={index}>
                <img src={item.img} alt={item.text} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Safety Information */}
          <div className="safety-info">
            <h1>Safety Information</h1>
            <div className="fire-safety-info">
              {[
                { img: "/assets/Images/fire/firealarms.png", text: "Install and Maintain Smoke Alarms" },
                { img: "/assets/Images/fire/escape.png", text: "Develop and Practice Escape Plan" },
                { img: "/assets/Images/fire/fireexting.png", text: "Proper Use of Fire Extinguishers" },
                { img: "/assets/Images/fire/kitchen.png", text: "Kitchen Safety" },
                { img: "/assets/Images/fire/heating.png", text: "Heating Safety" },
              ].map((info, index) => (
                <div className="info-section" key={index}>
                  <img src={info.img} alt={info.text} width="250px" />
                  <p>
                    <span>{index + 1}. {info.text}:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fire Extinguishers */}
          <div className="fire-extinguishers">
            <h1>Fire Extinguishers</h1>
            <div className="main-sections">
              {[
                { img: "/assets/Images/fire/classa.png", text: "Ordinary Combustible Materials" },
                { img: "/assets/Images/fire/classb.svg", text: "Flammable Liquids" },
                { img: "/assets/Images/fire/classc.png", text: "Electrical Equipment" },
                { img: "/assets/Images/fire/classd.png", text: "Combustible Metals" },
                { img: "/assets/Images/fire/classk.png", text: "Kitchen Fires" },
              ].map((ext, index) => (
                <div className="sections" key={index}>
                  <img src={ext.img} alt={ext.text} width="190px" />
                  <p>{ext.text}</p>
                </div>
              ))}
            </div>
            <img src="/assets/Images/fire/fire.png" className="fire-extinguisher-img" alt="Fire Extinguisher" />
          </div>

          {/* Emergency Numbers */}

          <div className="police-numbers">
        <h1>Emergency Numbers</h1>
        <p>Have questions or need assistance? Our team is ready to respond 24/7.</p>
        <div className="police-numbers-section">
          <div className="numbers-emy">
            <p><FaPhoneAlt className="icon" /> Dial: 100</p>
            <p><FaPhoneAlt className="icon" /> Control Room (M): +91 123 456 7890</p>
            <p><FaPhoneAlt className="icon" /> Control Room (L): +91 123 456 7890</p>
          </div>
          <div className="police-social">
            <p><FaInstagram className="icon" /> Instagram</p>
            <p><FaFacebookF className="icon" /> Facebook</p>
            <p><FaTwitter className="icon" /> Twitter</p>
            <p><FaYoutube className="icon" /> YouTube</p>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Fire;
