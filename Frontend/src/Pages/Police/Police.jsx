import React from 'react'
import './Police.css'

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
          <h2>Police Services</h2>
          <p style={{ color: "#fff" }}>Call Us Now for Emergency Services</p>
          <button className="general-btn">
            <a href="tel:+91 63052 79018">Dial 100</a>
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
              <span>Any Emergency Call: 100</span>
            </div>
          </div>

          <h1>May I help you?</h1>

          {/* Police Service Cards */}
          <div className="row gallery-section fadeInUp">
            {policeServices.map((service, index) => (
              <div className="card" key={index} style={{ width: "18rem" }}>
                <img src={service.image} className="card-img-top" alt={service.title} />
                <p>{service.title}</p>
              </div>
            ))}
          </div>

          {/* Emergency Numbers Section */}
          <div className="police-numbers">
            <h2>Emergency Numbers</h2>
            <div className="police-numbers-section">
              <div className="numbers">
                <p>Dial : 100</p>
                <p>Women Cell : +91 123 456 7890</p>
                <p>Control Room (M) : +91 123 456 7890</p>
                <p>Control Room (L) : +91 123 456 7890</p>
              </div>
              <div className="police-social">
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Police
