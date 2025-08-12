import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// ES6 Feature Components
import CricketApp from "./components/ES6Features/CricketApp";
import OfficeSpaceApp from "./components/ES6Features/OfficeSpaceApp";

// Events Components
import CounterExample from "./components/Events/CounterExample";
import CurrencyConverter from "./components/Events/CurrencyConverter";

// Conditional Rendering Components
import TicketBooking from "./components/ConditionalRendering/TicketBooking";
import BloggerApp from "./components/ConditionalRendering/BloggerApp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Welcome to React Practice App</h2>} />
        <Route path="/cricket" element={<CricketApp />} />
        <Route path="/office" element={<OfficeSpaceApp />} />
        <Route path="/counter" element={<CounterExample />} />
        <Route path="/converter" element={<CurrencyConverter />} />
        <Route path="/ticket" element={<TicketBooking />} />
        <Route path="/blogger" element={<BloggerApp />} />
      </Routes>
    </>
  );
}

export default App;
