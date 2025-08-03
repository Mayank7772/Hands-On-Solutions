// App.js
import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    { name: 'React Bootcamp', status: 'Ongoing', duration: '6 weeks' },
    { name: 'Java Fundamentals', status: 'Completed', duration: '8 weeks' },
  ];

  return (
    <div>
      <h2>Cohort Dashboard</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} {...cohort} />
      ))}
    </div>
  );
}

export default App;
