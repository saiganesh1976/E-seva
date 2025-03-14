import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAmbulance, FaUserShield, FaGasPump, FaTint, FaCreditCard, FaFireExtinguisher } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for API calls
import "./Dashboard.css";
import users from "/assets/Images/user.png";

const Dashboard = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [bookings, setBookings] = useState([]);
  const [countdown, setCountdown] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(userData)); // Load user details from localStorage
    fetchBookings(); // Fetch bookings when component mounts
  }, [navigate]);

  // Fetch bookings from API
  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:4000/bookings/displayBookings");
      setBookings(response.data);
      startCountdown(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  // Start countdown for each booking
  const startCountdown = (bookings) => {
    const countdownTimers = {};

    bookings.forEach((booking) => {
      const etaTime = new Date(booking.eta).getTime();
      countdownTimers[booking._id] = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = etaTime - now;

        if (timeLeft <= 0) {
          clearInterval(countdownTimers[booking._id]);
          setCountdown((prev) => ({ ...prev, [booking._id]: "Arrived" }));
        } else {
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
          setCountdown((prev) => ({ ...prev, [booking._id]: `${minutes}m ${seconds}s` }));
        }
      }, 1000);
    });

    return () => {
      Object.values(countdownTimers).forEach(clearInterval);
    };
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
        <button className="general-btn" onClick={() => { localStorage.clear(); navigate("/login"); }}>Logout</button>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <h2>Your Bookings</h2>
        <div className="booking-list">
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div key={booking._id} className="booking-card">
                <h3>{booking.service_required}</h3>
                <p><strong>Vehicle:</strong> {booking.vehicle_number}</p>
                <p><strong>Name:</strong> {booking.firstname}</p>
                <p><strong>Mobile Number:</strong> {booking.phonenumber}</p>
                <p><strong>Fuel Type:</strong> {booking.fueltype}</p>
                <p><strong>Quantity:</strong> {booking.quantity}L</p>
                <p><strong>ETA:</strong> {countdown[booking._id] || "Calculating..."}</p>
              </div>
            ))
          ) : (
            <p>No active bookings.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
