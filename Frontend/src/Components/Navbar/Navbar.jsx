import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaAmbulance, FaUserShield, FaGasPump, FaTint, FaCreditCard, FaFireExtinguisher } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is imported
import "./Navbar.css";

import favicon from "/assets/Images/favicon.png";
import userIcon from "/assets/Images/user.png"; // Profile icon

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSetActive = (path) => {
    setActiveLink(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src={favicon} alt="Logo" width="35" className="d-inline-block align-text-top" />
          E-Seva <span className="subtitle">Safety & Services</span>
        </Link>

        {/* Menu Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse navbar-section" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === "/" ? "active" : ""}`} to="/" onClick={() => handleSetActive("/")}>
                Home
              </Link>
            </li>
            {/* Our Services Dropdown (Visible when logged in) */}
            {isLoggedIn && (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><Link className="dropdown-item" to="/ambulance"><FaAmbulance /> Ambulance</Link></li>
                  <li><Link className="dropdown-item" to="/police"><FaUserShield /> Police</Link></li>
                  <li><Link className="dropdown-item" to="/petrol"><FaGasPump /> Petrol</Link></li>
                  <li><Link className="dropdown-item" to="/bloodbank"><FaTint /> Blood Bank</Link></li>
                  <li><Link className="dropdown-item" to="/fastag"><FaCreditCard /> FASTag</Link></li>
                  <li><Link className="dropdown-item" to="/fire"><FaFireExtinguisher /> Fire Station</Link></li>
                </ul>
              </li>
            )}
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === "/grievances" ? "active" : ""}`} to="/grievances" onClick={() => handleSetActive("/grievances")}>
                Grievances
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === "/gallery" ? "active" : ""}`} to="/gallery" onClick={() => handleSetActive("/gallery")}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === "/contactus" ? "active" : ""}`} to="/contactus" onClick={() => handleSetActive("/contactus")}>
                Contact Us
              </Link>
            </li>


          </ul>

          {/* User Profile or Sign-in */}
          <div className="buttons">
            {isLoggedIn ? (
              <div className="profile-dropdown">
                <Link to="/userProfile" className="profile-btn">
                  <img src={userIcon} alt="Profile" width="35" className="profile-icon" />
                </Link>
              </div>
            ) : (
              <Link to="/signup" className="submit-btn">Sign In</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
