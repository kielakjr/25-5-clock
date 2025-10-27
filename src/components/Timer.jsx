import React from 'react'


const Timer = ({ timerValue, label }) => {
  return (
    <div className='timer-container'>
      <h2 id="timer-label">{label}</h2>
      <p  id="time-left" className={`${timerValue.minutes === 0 ? 'last-minute' : ''}`}>{timerValue.minutes < 10 ? `0${timerValue.minutes}` : timerValue.minutes}:{timerValue.seconds < 10 ? `0${timerValue.seconds}` : timerValue.seconds}</p>
    </div>
  )
}

export default Timer
