// src/components/ES6Features/OfficeSpaceApp.jsx
import React from "react";

const OfficeSpaceApp = () => {
  const offices = [
    { name: "Skyline Tower", rent: 55000, address: "MG Road, Bangalore", img: "https://via.placeholder.com/150" },
    { name: "Tech Park", rent: 70000, address: "Sector 62, Noida", img: "https://via.placeholder.com/150" },
    { name: "City Center", rent: 45000, address: "Connaught Place, Delhi", img: "https://via.placeholder.com/150" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Office Space Rental App</h2>
      {offices.map((office, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>{office.name}</h3>
          <img src={office.img} alt={office.name} />
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeSpaceApp;
