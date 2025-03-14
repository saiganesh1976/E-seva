import React, { useState } from "react";
import "./ApplyFastag.css"; // Import CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for layout & styling
import axios from "axios";

const ApplyFastag = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    city: "",
    state: "",
    phonenumber: "",
    vechilenumber: "",
    company: "",
    amount: "",
    licence: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://e-seva-backend.onrender.com/fasttag/apply", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Booking Failed");

      const data = await response.json();
      alert(`Booking Successful! Your FASTag ID is: ${data.fasttagID}`);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during booking. Please try again.");
    }
  };

  return (
    <div className="wrapper-section-3">
      <div className="fastagApply-form">
        <form
          className="row g-3 needs-validation"
          onSubmit={handleSubmit}
          noValidate
        >
          <h1>Apply New FASTag</h1>

          {/* Customer Details */}
          <label className="section-title">
            <b>Customer Details:</b>
          </label>

          <div>
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              placeholder="Enter your First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              placeholder="Enter your Last Name"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="form-label">Email ID</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              name="phonenumber"
              placeholder="Enter your Phone Number"
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
          </div>

          {/* Vehicle Details */}
          <label className="section-title">
            <b>Vehicle Details:</b>
          </label>

          <div className="col-md-4">
            <label className="form-label">Vehicle Registration Number</label>
            <input
              type="text"
              className="form-control"
              name="vechilenumber"
              placeholder="Vehicle Number"
              value={formData.vechilenumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Vehicle Brand</label>
            <input
              type="text"
              className="form-control"
              name="company"
              placeholder="Brand"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Amount</label>
            <input
              type="number"
              className="form-control"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">License Number</label>
            <input
              type="text"
              className="form-control"
              name="licence"
              placeholder="License Number"
              value={formData.licence}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <button className="submit-btn" type="submit">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyFastag;
