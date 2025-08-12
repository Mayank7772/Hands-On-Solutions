// src/components/Events/CurrencyConverter.jsx
import React, { useState } from "react";

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const convertToEuro = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; // Example rate
    setEuros((rupees * conversionRate).toFixed(2));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Currency Converter</h2>
      <form onSubmit={convertToEuro}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
          required
        />
        <button type="submit">Convert</button>
      </form>
      {euros && <p>Amount in Euro: €{euros}</p>}
    </div>
  );
};

export default CurrencyConverter;
