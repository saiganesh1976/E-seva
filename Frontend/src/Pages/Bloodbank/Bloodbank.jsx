import React, { useState } from "react";
import "./BloodBank.css";
import { useNavigate } from "react-router-dom";

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
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/bloodbank", {
        method: "POST",
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
          <h2>Blood Bank Services</h2>
          <p>Available Blood for Emergency needs</p>
          <button className="general-btn">
            <a href="/needblood" target="_blank" rel="noopener noreferrer">
              Need Blood
            </a>
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
                <input type="text" name="firstname" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastname" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="number" name="phonenumber" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email ID</label>
                <input type="email" name="email" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Blood Group</label>
                <select name="bloodgroup" onChange={handleChange} required>
                  <option value="">Choose...</option>
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
                  <input type="radio" name="gender" value="male" onChange={handleChange} />
                  <label>Male</label>
                  <input type="radio" name="gender" value="female" onChange={handleChange} />
                  <label>Female</label>
                  <input type="radio" name="gender" value="others" onChange={handleChange} />
                  <label>Others</label>
                </div>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" name="street" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>State</label>
                <input type="text" name="state" onChange={handleChange} required />
              </div>
              <button type="submit" className="general-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodBank;
