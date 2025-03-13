import React from 'react'
import './Instructions.css'
import instructions from '/assets/Images/instruct.svg'


const Instructions = () => {
  return (
    <div className="instructions-wrapper fadeInUp">
        <h1>Instructions</h1>
        <div className="instructions-main">
          <div className="instructions-main-img">
            <img src={instructions} width="550px" alt="instructions" />
          </div>
          <div>
            To access our emergency safety service:
            <br />
            <ol>
              <li>
                <b>Log In/Sign Up:</b> If you're new, sign up with required
                details.If you're a returning user, log in with your
                credentials.
              </li>
              <li>
                <b>Choose Service:</b> Select the specific emergency service you
                need.
              </li>
              <li>
                <b> Provide Location:</b> Share your current location or where
                the emergency is.
              </li>
              <li><b>Describe Emergency:</b> Explain the situation briefly.</li>
              <li><b>Submit Request:</b> Send your assistance request.</li>
              <li>
                <b>Stay Available:</b> Stay connected for further instructions.
              </li>
              <li>
                <b>Receive Assistance:</b> Help will be dispatched based on your
                information.
              </li>
              <li>
                <b> Provide Feedback:</b> After the emergency, share your
                experience for improvement.
              </li>
              <li>
                <b>Stay Informed:</b> Explore safety resources on our website
                for future preparedness.
              </li>
            </ol>
            <p>
              Follow these steps for swift access to our emergency safety
              service.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Instructions
