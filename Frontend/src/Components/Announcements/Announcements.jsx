import React from "react";
import './Announcements.css'

import img from '/assets/Images/new.gif'

const Announcements = () => {
  return (
    <div className="Notice">
      <marquee id="announcement">
        <p>
          &emsp;&emsp; 
          <img src={img} alt="new" height={30} /> Welcome to E-Seva Portal - Your one-stop solution for emergency services.
          &emsp;&emsp; <img src={img} alt="new" height={30} /> Available services : &nbsp; Blood Bank Service 
          &emsp;&emsp; <img src={img} alt="new" height={30} /> Ambulance Service 
          &emsp;&emsp; <img src={img} alt="new" height={30} /> Police Service
          &emsp;&emsp; <img src={img} alt="new" height={30} /> Petrol Service 
          &emsp;&emsp; <img src={img} alt="new" height={30} /> FASTag Service 
          &emsp;&emsp; <img src={img} alt="new" height={30} /> Fire Service
        </p>
      </marquee>
    </div>
  );
};

export default Announcements;