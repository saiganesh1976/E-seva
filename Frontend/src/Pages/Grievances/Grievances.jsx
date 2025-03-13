import React, { useState } from "react";
import './Grievance.css';

const Grievance = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    address: "",
    city: "",
    state: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add API call logic here
  };

  return (
    <div className="grievance-container">
      <h1 className="grievance-title">Feedback</h1>
      <form onSubmit={handleSubmit} className="grievance-form">
        <div className="form-row">
          <input type="text" name="firstname" placeholder="First Name" required className="input-field" onChange={handleChange} />
          <input type="text" name="lastname" placeholder="Last Name" required className="input-field" onChange={handleChange} />
        </div>
        <div className="form-row">
          <input type="number" name="phonenumber" placeholder="Phone Number" required className="input-field" onChange={handleChange} />
          <input type="text" name="address" placeholder="1234 Main St" required className="input-field" onChange={handleChange} />
        </div>
        <div className="form-row">
          <input type="text" name="city" placeholder="City" required className="input-field" onChange={handleChange} />
          <select name="state" required className="input-field" onChange={handleChange}>
            <option value="">State</option>
            {["Andhra Pradesh", "Telangana", "Karnataka", "Maharashtra"].map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <textarea name="comments" placeholder="Leave a comment here..." required className="textarea-field" rows="4" onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Grievance;
