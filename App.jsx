import React from 'react'
import { useEffect } from 'react'
import Length from './components/Length.jsx'
import Timer from './components/Timer.jsx'
import Buttons from './components/Buttons.jsx'
import beep from './assets/beep_sound.mp3'

const convertMinutesToSeconds = (minutes) => {
  return minutes * 60;
}

const convertSecondsToMinutesAndSeconds = (count) => {
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  return {minutes, seconds};
}

const App = () => {

  const initialBreakLength = 5;
  const initialSessionLength = 25;
  const initialTimerType = 'session';

  const [breakLength, setBreakLength] = React.useState(initialBreakLength);
  const [sessionLength, setSessionLength] = React.useState(initialSessionLength);
  const [isRunning, setIsRunning] = React.useState(false);
  const [timerType, setTimerType] = React.useState(initialTimerType);
  let timerLabel = timerType === 'session' ? 'Session' : 'Break';

  const initialCount = convertMinutesToSeconds(sessionLength);

  const [count, setCount] = React.useState(initialCount);

  const audioRef = React.useRef(null);

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }


  const countdown = () => {
    setCount((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    resetAudio();
  }, []);

  useEffect(() => {
    if (timerType === 'session') {
      setCount(convertMinutesToSeconds(sessionLength > 0 ? sessionLength : 1));
    } else {
      setCount(convertMinutesToSeconds(breakLength > 0 ? breakLength : 1));
    }
  }, [sessionLength, breakLength]);


  useEffect(() => {
    if (count === 0) {
      audioRef.current = document.getElementById("beep");
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      if (timerType === 'session') {
        setTimerType('break');
        setCount(convertMinutesToSeconds(breakLength));
      } else {
        setTimerType('session');
        setCount(convertMinutesToSeconds(sessionLength));
      }
      setTimeout(resetAudio, 1500);
    }
  }, [count]);

  useEffect(() => {
    let timer;
    if (isRunning && count > 0) {
      timer = setTimeout(countdown, 1000);
    }
    return () => clearTimeout(timer);
  }, [isRunning, count]);

  return (
    <>
      <div className='lengths-container'>
        <Length lengthType="break" value={breakLength} onUpdate={setBreakLength} isRunning={isRunning}>Break Length</Length>
        <Length lengthType="session" value={sessionLength} onUpdate={setSessionLength} isRunning={isRunning}>Session Length</Length>
      </div>
      <Timer timerValue={convertSecondsToMinutesAndSeconds(count)} label={timerLabel} />
      <Buttons onRun={setIsRunning} isRunning={isRunning} onReset={() => {setCount(initialCount); setBreakLength(initialBreakLength); setSessionLength(initialSessionLength); setTimerType(initialTimerType); resetAudio();}} />
      <audio id="beep" src={beep} />
    </>
  )
}

export default App
