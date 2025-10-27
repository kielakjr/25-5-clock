import React from 'react'
import Length from './components/Length.jsx'
import Timer from './components/Timer.jsx'
import Buttons from './components/Buttons.jsx'

const convertMinutesToSeconds = (minutes) => {
  return minutes * 60;
}

const convertSecondsToMinutesAndSeconds = (count) => {
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  return {minutes, seconds};
}

const App = () => {

  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);
  const [isRunning, setIsRunning] = React.useState(false);

  const initialCount = convertMinutesToSeconds(sessionLength);

  const [count, setCount] = React.useState(initialCount);


  const countdown = () => {
    setCount((prevCount) => prevCount - 1);
  }

  React.useEffect(() => {
    let timer;
    if (isRunning && count > 0) {
      timer = setTimeout(countdown, 1000);
    }
    return () => clearTimeout(timer);
  }, [isRunning, count]);

  return (
    <>
      <div className='lengths-container'>
        <Length value={breakLength} onUpdate={setBreakLength} isRunning={isRunning}>Break Length</Length>
        <Length value={sessionLength} onUpdate={setSessionLength} isRunning={isRunning}>Session Length</Length>
      </div>
      <Timer timerValue={convertSecondsToMinutesAndSeconds(count)} />
      <Buttons onRun={setIsRunning} isRunning={isRunning} onReset={() => setCount(initialCount)} />
    </>
  )
}

export default App
