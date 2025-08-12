// src/components/ConditionalRendering/TicketBooking.jsx
import React, { useState } from "react";

const TicketBooking = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const GuestPage = () => (
    <div>
      <h3>Guest View</h3>
      <p>Browse flight details, but please log in to book tickets.</p>
    </div>
  );

  const UserPage = () => (
    <div>
      <h3>User View</h3>
      <p>Welcome! You can now book tickets.</p>
    </div>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ticket Booking App</h2>
      {isLoggedIn ? <UserPage /> : <GuestPage />}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default TicketBooking;
