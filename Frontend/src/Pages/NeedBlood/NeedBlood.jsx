import React, { useState, useEffect } from "react";
import "./NeedBlood.css"; // Import your CSS file

const BloodATM = () => {
  // Simulated donor data (Replace this with API fetch)
  const [donors, setDonors] = useState([
    { firstname: "John", lastname: "Doe", bloodgroup: "A+", gender: "Male", phonenumber: "1234567890", email: "john@example.com" },
    { firstname: "Jane", lastname: "Smith", bloodgroup: "B-", gender: "Female", phonenumber: "9876543210", email: "jane@example.com" },
    { firstname: "Sam", lastname: "Wilson", bloodgroup: "O+", gender: "Male", phonenumber: "9998887776", email: "sam@example.com" },
    { firstname: "Emily", lastname: "Johnson", bloodgroup: "AB+", gender: "Female", phonenumber: "8887776665", email: "emily@example.com" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter donors based on search input
  const filteredDonors = donors.filter((donor) =>
    donor.bloodgroup.toUpperCase().includes(searchQuery.toUpperCase())
  );

  return (
    <div className="wrapper-section-1">
      <h1>Blood ATM</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <label htmlFor="searchInput">Search</label>
        <input
          type="text"
          id="searchInput"
          className="search-input"
          placeholder="Search for blood group.."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Table to display donors */}
      <table className="table table-striped table-dark">
        <thead>
          <tr className="table-header">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonors.length > 0 ? (
            filteredDonors.map((donor, index) => (
              <tr key={index}>
                <td>{donor.firstname}</td>
                <td>{donor.lastname}</td>
                <td>{donor.bloodgroup}</td>
                <td>{donor.gender}</td>
                <td>
                  <a href={`tel:${donor.phonenumber}`} className="contact-link">
                    {donor.phonenumber}
                  </a>
                </td>
                <td>
                  <a href={`mailto:${donor.email}`} className="contact-link">
                    {donor.email}
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No matching donors found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BloodATM;
