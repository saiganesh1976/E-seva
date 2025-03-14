import React from "react";
import "./Police.css";
import { FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const policeServices = [
  { title: "File a Case", image: "/assets/Images/police/fir.jpg" },
  { title: "Know your Police Station", image: "/assets/Images/police/ps.jpg" },
  { title: "Traffic", image: "/assets/Images/police/trafficpolice.jpg" },
  { title: "E-Challan", image: "/assets/Images/police/challans.jpg" },
  { title: "Passport Verification", image: "/assets/Images/police/passport.jpg" },
  { title: "Study Materials", image: "/assets/Images/police/study.jpg" },
  { title: "Woman Safety", image: "/assets/Images/police/women.jpg" },
  { title: "Child Safety", image: "/assets/Images/police/child.jpg" },
];

const Police = () => {
  return (
    <div className="police-container">
      {/* Header Section */}
      <div className="police-header-wrapper">
        <div className="page-header police">
          <h2 lassName="header-title">Police Services</h2>
          <p>Call Us Now for Emergency Services</p>
          <button className="submit-btn">
            <a href="tel:100">
              <FaPhoneAlt /> Dial 100
            </a>
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="wrapper-section">
        <div className="title">
          <h1>Police Services</h1>
        </div>

        <div className="services-content-section">
          <p>
            In emergency situations, swift assistance can make all the difference. Police services play a crucial role
            in maintaining law and order, assisting the public, and responding to emergencies.
          </p>

          {/* Police Animation Section */}
          <div className="police-animate-section">
            <div className="animation-section">
              <img src="/assets/Images/police/policevan.png" alt="Police Van" />
              <span>Emergency? Call 100</span>
            </div>
          </div>

          <h1>May I help you?</h1>

          {/* Police Service Cards */}
          <div className="gallery-section">
            {policeServices.map((service, index) => (
              <div className="card" key={index}>
                <img src={service.image} alt={service.title} />
                <p>{service.title}</p>
              </div>
            ))}
          </div>

          {/* Emergency Services Section */}
          <div className="emergency-services">
            <h2>Emergency Police Assistance</h2>
            <p>
              The police department offers 24/7 emergency services to ensure the safety and security of the public. 
              In case of any crime, accident, or distress situation, you can seek immediate help through the helpline numbers.
            </p>
            <ul>
              <li><strong>Crime Reporting:</strong> File complaints about theft, robbery, or any criminal activity.</li>
              <li><strong>Immediate Rescue:</strong> Police assistance for road accidents, mob violence, or fire outbreaks.</li>
              <li><strong>Women and Child Safety:</strong> Special teams for the protection of women and children in distress.</li>
              <li><strong>Traffic Control:</strong> Instant help for road accidents and traffic violations.</li>
              <li><strong>Cyber Crime Assistance:</strong> Support for online fraud, hacking, and cyberbullying cases.</li>
            </ul>
            <p>
              <strong>Remember:</strong> If you are in danger, do not hesitate to Dial 100 or visit your nearest police station.
            </p>
          </div>

          {/* Emergency Numbers Section */}
          <div className="police-numbers">
            <h2>Emergency Numbers</h2>
            <div className="police-numbers-section">
              <div className="numbers">
                <p><FaPhoneAlt /> Dial: <strong>100</strong> (General Police Helpline)</p>
                <p><FaPhoneAlt /> Women Helpline: <strong>+91 98765 43210</strong></p>
                <p><FaPhoneAlt /> Cyber Crime: <strong>+91 98765 43213</strong></p>
                <p><FaPhoneAlt /> Traffic Control: <strong>+91 98765 43214</strong></p>
              </div>
              <div className="police-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> SafeCityPolice</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /> ShieldForceHQ</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> RapidResponse</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /> LawGuardians</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Police;
