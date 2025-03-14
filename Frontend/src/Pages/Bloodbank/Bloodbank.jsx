import React, { useState } from "react";
import "./BloodBank.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BloodBank = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    bloodgroup: "",
    gender: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/bloodbank", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registered Successfully!");
        navigate("/thank-you");
      } else {
        throw new Error("Registration Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="bloodbank-container">
      {/* Header Section */}
      <div className="blood-header-wrapper">
        <div className="page-header blood">
          <h2 className="header-title">Blood Bank Services</h2>
          <p>Available Blood for Emergency needs</p>
          <button className="submit-btn">
            <Link to="/bloodATM" target="_blank" rel="noopener noreferrer">
              Blood ATM
            </Link>
          </button>
        </div>
      </div>

      {/* Registration Form */}
      <div className="wrapper-section">
        <div className="title">
          <h1>Register Now</h1>
        </div>
        <div className="services-content-section">
          <div className="blood-form">
            <form className="row" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="number"
                  name="phonenumber"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email ID"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Blood Group</label>
                <select name="bloodgroup" onChange={handleChange} required>
                  <option value="">Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
              <div className="form-group">
                <label>Gender</label>
                <div className="gender-options">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />
                  <label>Female</label>
                  <input
                    type="radio"
                    name="gender"
                    value="others"
                    onChange={handleChange}
                  />
                  <label>Others</label>
                </div>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="street"
                  placeholder="Enter your street address"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Pin Code</label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="Enter your Pincode"
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodBank;
