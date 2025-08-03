// CohortDetails.js
import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ name, status, duration }) => {
  const headingStyle = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{name}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{status}</dd>
        <dt>Duration:</dt>
        <dd>{duration}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
