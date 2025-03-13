import { useState } from "react";
import axios from "axios";
import "./signup.css";

import welcome from '/assets/Images/welcome.svg'

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let tempErrors = {};
    const usernamePattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!usernamePattern.test(formData.username)) {
      tempErrors.username = "Username must contain alphabets, a special character, and a number.";
    }
    if (!emailPattern.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("https://e-seva-backend.onrender.com/auth/signup", formData, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // This is necessary to include cookies or authorization headers
        });        

        setSuccessMessage("Signup successful! Redirecting...");
        console.log("Form submitted successfully", response.data);

        setTimeout(() => {
          window.location.href = "/login"; // Redirect to login page
        }, 2000);
      } catch (error) {
        console.error("Signup error:", error.response?.data?.message || error.message);
        setErrors({ general: error.response?.data?.message || "Signup failed. Try again." });
      }
    }
  };

  return (
    <section className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-left">
          <h1>Sign Up</h1>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          {errors.general && <div className="alert alert-danger">{errors.general}</div>}
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="mb-3 col-12">
              <label className="signup-label">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                placeholder="Enter your name"
                required
              />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>
            <div className="mb-3">
              <label className="signup-label">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="name@example.com"
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label className="signup-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter the Password"
                required
              />
            </div>
            <div className="col-12 mb-4">
              <button type="submit" className="submit-btn">Sign Up</button>
            </div>
          </form>
          <p>
            Already have an account? <a href="/login" className="signup-link">Login here</a>
          </p>
        </div>
        <div className="signup-right">
        <img
            src={welcome}
            className="img-fluid"
            width="600px"
            alt="Sample image"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
