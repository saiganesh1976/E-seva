// import React from "react";
// import "./Ambulance.css";
// import { Link } from "react-router-dom";

// const [nearestHospitalLink, setNearestHospitalLink] = useState("#");

// const handleButton = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         setNearestHospitalLink(
//           `https://www.google.com/maps/search/nearest+hospitals/@${latitude},${longitude},15z`
//         );
//       },
//       (error) => {
//         console.error("Error getting location", error);
//         alert("Unable to fetch location. Please enable GPS.");
//       }
//     );
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// };

// const Ambulance = () => {
//   return (
//     <div className="ambulance-container">
//       <header className="ambulance-header">
//         <h2 className="header-title">Ambulance Services</h2>
//         <p className="header-description">
//           Call Us Now for Emergency Ambulance Services
//         </p>
//         <div className="header-buttons">
//           <button className="general-btn">
//             <a href="tel:+91 63052 79018">Dial 108</a>
//           </button>
//           <button className="general-btn" onClick={handleButton}>
//             <a
//               href={nearestHospitalLink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Nearest Hospitals
//             </a>
//           </button>
//           <button className="general-btn">
//             <Link to="/findHospital">Find Hospital</Link>
//           </button>
//         </div>
//       </header>

//     </div>
//   );
// };

// export default Ambulance;
import React, { useState } from "react";
import "./Ambulance.css";
import { Link } from "react-router-dom";

const ambulanceServices = [
  {
    title: "Basic Life Support",
    description:
      "BLS ambulances are staffed by EMT caregivers and provide transport for patients who require basic medical monitoring. This ambulance is equipped with basic lifesaving equipment such as a BP monitor, stretcher, and oxygen cylinder.",
    image: "/assets/Images/ambulance/BLS.png",
  },
  {
    title: "Ambulance Bus",
    description:
      "An ambulance bus is designed to transport multiple patients and provide medical evacuation in mass casualty incidents.",
    image: "/assets/Images/ambulance/Bus.png",
  },
  {
    title: "Advanced Life Support",
    description:
      "ALS is also called a mobile ICU, carrying advanced medical equipment and medications for critically ill patients.",
    image: "/assets/Images/ambulance/BLS.png",
  },
  {
    title: "Rapid Organ Recovery Ambulance",
    description:
      "Designed to preserve organs of the newly deceased for transplant, these ambulances may have a surgeon on board for organ removal and preservation.",
    image: "/assets/Images/ambulance/organ_rec.png",
  },
  {
    title: "Air Ambulance",
    description:
      "Air ambulances provide emergency medical assistance where ground ambulances cannot reach quickly, equipped with stretchers and medications.",
    image: "/assets/Images/ambulance/Air_ambulance.png",
  },
];

const Ambulance = () => {
  const [nearestHospitalLink, setNearestHospitalLink] = useState();

  const handleButton = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setNearestHospitalLink(
            `https://www.google.com/maps/search/nearest+hospitals/@${latitude},${longitude},15z`
          );
        },
        (error) => {
          console.error("Error getting location", error);
          alert("Unable to fetch location. Please enable GPS.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="ambulance-container">
      <header className="ambulance-header">
        <h2 className="header-title">Ambulance Services</h2>
        <p className="header-description">
          Call Us Now for Emergency Ambulance Services
        </p>
        <div className="header-buttons">
          <button className="general-btn">
            <a href="tel:+91 63052 79018">Dial 108</a>
          </button>
          <button className="general-btn" onClick={handleButton}>
            <a
              href={nearestHospitalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Nearest Hospitals
            </a>
          </button>
          <button className="general-btn">
            <Link to="/findHospital">Find Hospital</Link>
          </button>
        </div>
      </header>
      <section className="services-section">
        <h1 className="section-title">Our Services</h1>
        <div className="services-list">
          {ambulanceServices.map((service, index) => (
            <div
              className={`service-item ${
                index % 2 === 0 ? "service-odd" : "service-even"
              }`}
              key={index}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-details">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <button className="general-btn">
                  <a href="tel:+91 63052 79018">Call Now</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ambulance;
