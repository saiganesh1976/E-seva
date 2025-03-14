import React, { useState } from "react";
import "./FastagRecharge.css"; // Import CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const FastagRecharge = () => {
  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    vechilenumber: "",
    amount: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/recharge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Recharge Failed");

      const data = await response.json();
      alert(`Successfully Recharged! Available Balance: ${data.newBalance}`);
    } catch (error) {
      console.error("Error:", error);
      alert("Recharge failed, please try again.");
    }
  };

  return (
    <div className="wrapper-section-2">
      <div className="fastag-form">
        <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
      <h1>FASTag Recharge</h1>
          {/* Email */}
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

          {/* Vehicle Number */}
           <div> 
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

          {/* Amount */}
           <div> 
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

          {/* Submit Button */}
          <div className="col-12">
            <button className="submit-btn" type="submit">
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FastagRecharge;
