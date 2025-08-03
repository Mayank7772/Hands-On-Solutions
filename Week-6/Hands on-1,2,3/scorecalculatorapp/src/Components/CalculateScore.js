import React from 'react'

const CalculateScore = ({nam,school,total,goal}) => {
  return (
    <div>
      <h2>Scorecard for {nam}</h2>
      <p>School: {school}</p>
      <p>Total: {total}</p>
      <p>Goal: {goal}</p>
      <p>Percentage: {Math.round((total / goal) * 100)}%</p>
    </div>
  )
}

export default CalculateScore
