import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";

import favicon from "/assets/Images/favicon.png";
import userIcon from "/assets/Images/user.png"; // Profile icon

const Navbar = () => {
  const location = useLocation(); // Get the current route
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
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={favicon}
            alt="Logo"
            width="35"
            className="d-inline-block align-text-top"
          />
          E-Seva <span className="subtitle">Safety & Services</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-section" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                to="/"
                onClick={() => handleSetActive("/")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "/grievences" ? "active" : ""}`}
                to="/grievences"
                onClick={() => handleSetActive("/grievences")}
              >
                Grievances
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "/gallery" ? "active" : ""}`}
                to="/gallery"
                onClick={() => handleSetActive("/gallery")}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "/contactus" ? "active" : ""}`}
                to="/contactus"
                onClick={() => handleSetActive("/contactus")}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="buttons">
            {isLoggedIn ? (
              <div className="profile-dropdown">
                <button className="profile-btn">
                <Link to="/userProfile" className="dropdown-item"><img src={userIcon} alt="Profile" width="35" className="profile-icon" /></Link>
                </button>
              </div>
            ) : (
              <Link to="/signup" className="btn">Sign In</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
