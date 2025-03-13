import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import favicon from "/assets/Images/favicon.png";
import users from "/assets/Images/user.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
  
    if (!token || !userData) {
      navigate("/login");
      return;
    }
  
    setUser(JSON.parse(userData)); // Load user details from localStorage
  }, [navigate]);
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-main">
      <div className="dashboard-side">
        <img src={favicon} alt="E-Seva Logo" />
        <h1><Link to="/">E-Seva</Link></h1>
        <div className="services-links">
          <h2>Our Services</h2>
          <hr />
          <ul>
            <li><Link to="/ambulance">Ambulance</Link></li>
            <li><Link to="/police">Police</Link></li>
            <li><Link to="/petrol">Petrol</Link></li>
            <li><Link to="/bloodbank">Blood Bank</Link></li>
            <li><Link to="/fastag">FASTag</Link></li>
            <li><Link to="/fire">Fire Station</Link></li>
          </ul>
        </div>
        <button className="submit-btn" onClick={handleLogout}>Logout</button>
      </div>
      <div className="dashboard-content">
        <div className="user-info">
            <img src={users} alt="User" />
            <h4>Username: <span className="highlight">{user.username}</span></h4>
            <h4>Email: <span className="highlight">{user.email}</span></h4>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
