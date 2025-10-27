import React from 'react'

const Timer = ({ sessionLength }) => {
  return (
    <div className='timer-container'>
      <h2>Session</h2>
      <p>{sessionLength}:00</p>
    </div>
  )
}

export default Timer
