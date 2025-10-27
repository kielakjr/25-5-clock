import React from 'react'

const Timer = ({ timerValue }) => {
  return (
    <div className='timer-container'>
      <h2>Session</h2>
      <p>{timerValue.minutes}:{timerValue.seconds < 10 ? `0${timerValue.seconds}` : timerValue.seconds}</p>
    </div>
  )
}

export default Timer
