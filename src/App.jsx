import React from 'react'
import Length from './components/Length.jsx'
import Timer from './components/Timer.jsx'
import Buttons from './components/Buttons.jsx'

const convertMinutesToSeconds = (minutes) => {
  return minutes * 60;
}

const App = () => {

  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);

  const [count, setCount] = React.useState(0);

  const countdown = () => {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <div className='lengths-container'>
        <Length value={breakLength} onUpdate={setBreakLength}>Break Length</Length>
        <Length value={sessionLength} onUpdate={setSessionLength}>Session Length</Length>
      </div>
      <Timer sessionLength={sessionLength} />
      <Buttons />
    </>
  )
}

export default App
