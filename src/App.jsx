import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import Controls from './components/Controls';
import './App.css';

const App = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);

  const beepRef = React.useRef(null);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSessionLength(25);
    setBreakLength(5);
    setTimerLabel('Session');
    setTimeLeft(25 * 60);
    beepRef.current.pause();
    beepRef.current.currentTime = 0;
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            if (timerLabel === 'Session') {
              setTimerLabel('Break');
              return breakLength * 60;
            } else {
              setTimerLabel('Session');
              return sessionLength * 60;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isRunning && timeLeft === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, breakLength, sessionLength, timerLabel]);

  return (
    <div className="app">
      <h1>25 + 5 Clock</h1>
      <Controls
        sessionLength={sessionLength}
        breakLength={breakLength}
        setSessionLength={setSessionLength}
        setBreakLength={setBreakLength}
      />
      <Timer
        timerLabel={timerLabel}
        timeLeft={timeLeft}
        handleStartStop={handleStartStop}
        handleReset={handleReset}
      />
      <audio id="beep" ref={beepRef}>
        <source src="https://www.soundjay.com/button/beep-07.wav" />
      </audio>
    </div>
  );
};

export default App;
