import React from "react";
import "./Instructions.css";
import instructions from "/assets/Images/instruct.svg";

const Instructions = () => {
  return (
    <div className="instructions-wrapper fadeInUp">
      <h1>Instructions</h1>
      <div className="instructions-main">
        <div className="instructions-main-img">
          <img src={instructions} alt="instructions" />
        </div>
        <div className="instructions-content">
          <p>To access our emergency safety service:</p>
          <ol>
            <li><b>Log In/Sign Up:</b> Sign up if you're new; log in if you're a returning user.</li>
            <li><b>Choose Service:</b> Select the emergency service you need.</li>
            <li><b>Provide Location:</b> Share your current location.</li>
            <li><b>Describe Emergency:</b> Explain the situation briefly.</li>
            <li><b>Submit Request:</b> Send your assistance request.</li>
            <li><b>Stay Available:</b> Remain connected for further instructions.</li>
            <li><b>Receive Assistance:</b> Help will be dispatched accordingly.</li>
            <li><b>Provide Feedback:</b> Share your experience for improvement.</li>
            <li><b>Stay Informed:</b> Explore safety resources for future preparedness.</li>
          </ol>
          <p>Follow these steps for swift access to our emergency safety services.</p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
