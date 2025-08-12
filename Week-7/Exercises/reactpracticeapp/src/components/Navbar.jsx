import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/cricket" style={{ marginRight: "15px" }}>Cricket App</Link>
      <Link to="/office" style={{ marginRight: "15px" }}>Office Space App</Link>
      <Link to="/counter" style={{ marginRight: "15px" }}>Counter Example</Link>
      <Link to="/converter" style={{ marginRight: "15px" }}>Currency Converter</Link>
      <Link to="/ticket" style={{ marginRight: "15px" }}>Ticket Booking</Link>
      <Link to="/blogger">Blogger App</Link>
    </nav>
  );
};

export default Navbar;
