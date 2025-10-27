import React from 'react'
import {FaPlay, FaPause, FaRedo} from'react-icons/fa'

const Buttons = ({ onRun, isRunning, onReset }) => {

  const handlePlay = () => {
    onRun(prevIsRunning => !prevIsRunning);
  }

  const handleReset = () => {
    onRun(false);
    onReset();
  }

  return (
    <div className='buttons-container'>
        <button id="start_stop" onClick={handlePlay}>{isRunning ? <FaPause /> : <FaPlay />}</button>
        <button id="reset" onClick={handleReset}><FaRedo /></button>
    </div>
  )
}

export default Buttons
