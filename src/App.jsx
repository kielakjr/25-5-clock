import React from 'react'
import Length from './components/Length.jsx'

const App = () => {

  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);

  return (
    <>
      <div className='lengths-container'>
        <Length value={breakLength} onUpdate={setBreakLength}>Break Length</Length>
        <Length value={sessionLength} onUpdate={setSessionLength}>Session Length</Length>
      </div>
    </>
  )
}

export default App
