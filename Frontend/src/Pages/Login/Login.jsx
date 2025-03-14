import { useState } from "react";
import "./login.css";
import login from '/assets/Images/login.svg'
import axios from 'axios'


const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
  
    try {
      const response = await axios.post("https://e-seva-backend.onrender.com/auth/login", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
  
      if (response.data.success) {
        alert(`Successfully Logged In. Welcome ${response.data.user.username}`);
  
        // Store token & user data
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }
  
        window.location.href = "/userProfile"; // Redirect
      } else {
        setErrorMessage(response.data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };
  

  return (
    <section className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-left">
          <h1>Welcome Back</h1>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="mb-3 col-12">
              <label className="signup-label">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your Name"
                required
              />
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
            {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
            <div className="col-12 mb-4">
              <button type="submit" className="submit-btn">Login</button>
            </div>
          </form>
          <p>
            Don't have an account? <a href="/signup" className="signup-link">Register Now</a>
          </p>
        </div>
        <div className="signup-right">
          <img src={login} className="img-fluid" width="400px" alt="Login" />
        </div>
      </div>
    </section>
  );
};

export default Login;
