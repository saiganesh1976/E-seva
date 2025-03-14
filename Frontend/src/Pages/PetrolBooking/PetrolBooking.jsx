import React, { useState } from "react";
import axios from "axios";
import "./PetrolBooking.css";

const PetrolBooking = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    location: "",
    landmark: "",
    phonenumber: "",
    vehicle_number: "",
    fueltype: "",
    service_required: "",
    quantity: "",
  });

  const [otp, setOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateOTP = () => Math.floor(1000 + Math.random() * 9000);

  const sendOTP = () => {
    const otpValue = generateOTP();
    setOtp(otpValue);
    setOtpSent(true);
    alert(`OTP sent to ${formData.email}: ${otpValue}`);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userOtp !== otp.toString()) {
        alert("Invalid OTP. Please try again.");
        return;
    }

    setLoading(true);

    try {
        const response = await axios.post(
            "http://localhost:4000/bookings/book",
            {
                ...formData,
                fueltype: formData.fueltype.toLowerCase(), // Convert to lowercase
            },
            { headers: { "Content-Type": "application/json" } }
        );

        if (response.status === 201) {
            alert("Booking Successful!");
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                location: "",
                landmark: "",
                phonenumber: "",
                vehicle_number: "",
                fueltype: "",
                service_required: "",
                quantity: "",
            });
            setOtp("");
            setUserOtp("");
            setOtpSent(false);
        } else {
            throw new Error("Booking Failed");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while booking.");
    } finally {
        setLoading(false);
    }
};


  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h1>Petrol Service Booking</h1>

        <div className="row">
          <div className="form-group">
            <label className="label">First Name</label>
            <input type="text" name="firstname" className="input-field" placeholder="Enter your first name" required onChange={handleChange} value={formData.firstname} />
          </div>
          <div className="form-group">
            <label className="label">Last Name</label>
            <input type="text" name="lastname" className="input-field" placeholder="Enter your last name" required onChange={handleChange} value={formData.lastname} />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label className="label">Email ID</label>
            <input type="email" name="email" className="input-field" placeholder="Enter your email" required onChange={handleChange} value={formData.email} />
          </div>
          <div className="form-group">
            <label className="label">Phone Number</label>
            <input type="number" name="phonenumber" className="input-field" placeholder="Enter your phone number" required onChange={handleChange} value={formData.phonenumber} />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label className="label">Location</label>
            <input type="text" name="location" className="input-field" placeholder="Enter your location" required onChange={handleChange} value={formData.location} />
          </div>
          <div className="form-group">
            <label className="label">Landmark</label>
            <input type="text" name="landmark" className="input-field" placeholder="Enter your landmark" required onChange={handleChange} value={formData.landmark} />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label className="label">Vehicle Number</label>
            <input type="text" name="vehicle_number" className="input-field" placeholder="Enter your vehicle_number" required onChange={handleChange} value={formData.vehicle_number} />
          </div>
          <div className="form-group">
            <label className="label">Fuel Type</label>
            <input type="text" name="fueltype" className="input-field" placeholder="Enter your fueltype" required onChange={handleChange} value={formData.fueltype} />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label className="label">Service Required</label>
            <input type="text" name="service_required" className="input-field" placeholder="Enter your service_required" required onChange={handleChange} value={formData.service_required} />
          </div>
          <div className="form-group">
            <label className="label">Quantity</label>
            <input type="number" name="quantity" className="input-field" placeholder="Enter your quantity" required onChange={handleChange} value={formData.quantity} />
          </div>
        </div>

        <button type="button" className="submit-btn" onClick={sendOTP} disabled={otpSent}>
          {otpSent ? "OTP Sent" : "Send OTP"}
        </button>

        {otpSent && (
          <div className="form-group">
            <label className="label">Enter OTP</label>
            <input type="text" className="input-field" placeholder="Enter OTP" required onChange={(e) => setUserOtp(e.target.value)} />
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit Booking"}
        </button>
      </form>
    </div>
  );
};

export default PetrolBooking;
