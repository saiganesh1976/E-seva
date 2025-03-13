import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAmbulance, FaUserShield, FaGasPump, FaTint, FaCreditCard, FaFireExtinguisher } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import favicon from "/assets/Images/favicon.png";
import users from "/assets/Images/user.png";

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
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-main">
      {/* Sidebar */}
      <div className="dashboard-side"> 
        <div className="user-info">
          <img src={users} alt="User" />
          <h4>Username: <span className="highlight">{user.username}</span></h4>
          <h4>Email: <span className="highlight">{user.email}</span></h4>
        </div>
        {/* Logout Button */}
        <button className="general-btn" onClick={handleLogout}>Logout</button>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
      </div>
    </div>
  );
};

export default Dashboard;
