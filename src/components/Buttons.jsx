import React from 'react'
import {FaPlay, FaPause, FaRedo} from'react-icons/fa'

const Buttons = () => {
  return (
    <div className='buttons-container'>
        <button><FaPlay /></button>
        <button><FaRedo /></button>
    </div>
  )
}

export default Buttons
