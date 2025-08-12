import React from "react";

const CricketApp = () => {
  const players = [
    { name: "Player 1", score: 80 },
    { name: "Player 2", score: 50 },
    { name: "Player 3", score: 72 },
    { name: "Player 4", score: 60 },
    { name: "Player 5", score: 90 },
    { name: "Player 6", score: 40 },
    { name: "Player 7", score: 88 },
    { name: "Player 8", score: 65 },
    { name: "Player 9", score: 95 },
    { name: "Player 10", score: 55 },
    { name: "Player 11", score: 78 },
  ];

  const highScorers = players.filter(p => p.score >= 70); // Arrow function

  // Destructuring example
  const oddPlayers = players.filter((_, idx) => idx % 2 !== 0);
  const evenPlayers = players.filter((_, idx) => idx % 2 === 0);

  // Merge arrays example
  const t20Players = ["Rohit", "Virat"];
  const ranjiPlayers = ["Rahul", "Pujara"];
  const allPlayers = [...t20Players, ...ranjiPlayers];

  const flag = true; // Conditional display

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cricket App</h2>
      <h3>All Players</h3>
      <ul>
        {players.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>

      <h3>High Scorers (score >= 70)</h3>
      <ul>
        {highScorers.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>

      <h3>Odd Team Players</h3>
      <ul>
        {oddPlayers.map((p, index) => (
          <li key={index}>{p.name}</li>
        ))}
      </ul>

      <h3>Even Team Players</h3>
      <ul>
        {evenPlayers.map((p, index) => (
          <li key={index}>{p.name}</li>
        ))}
      </ul>

      <h3>Merged Players List</h3>
      <ul>
        {allPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Flag Conditional Display</h3>
      {flag ? <p>Flag is True — Show this content</p> : <p>Flag is False — Alternate content</p>}
    </div>
  );
};

export default CricketApp;
