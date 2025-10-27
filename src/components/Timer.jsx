import React from 'react'

const Timer = ({ timerValue, label }) => {
  return (
    <div className='timer-container'>
      <h2>{label}</h2>
      <p className={`${timerValue.minutes === 0 ? 'last-minute' : ''}`}>{timerValue.minutes}:{timerValue.seconds < 10 ? `0${timerValue.seconds}` : timerValue.seconds}</p>
    </div>
  )
}

export default Timer
