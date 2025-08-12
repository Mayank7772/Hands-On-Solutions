// src/components/Events/CounterExample.jsx
import React, { useState } from "react";

const CounterExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const sayHello = () => console.log("Hello! This is a static message.");
  const handleIncrementClick = () => {
    increment();
    sayHello();
  };

  const sayWelcome = (message) => alert(message);

  const handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert("I was clicked (Synthetic Event)!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("Welcome to the Event Handling Example!")}>
        Say Welcome
      </button>
      <br /><br />
      <button onClick={handleSyntheticEvent}>Synthetic Event Button</button>
    </div>
  );
};

export default CounterExample;
