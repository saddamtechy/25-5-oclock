import React from 'react';

const Timer = ({ timerLabel, timeLeft, handleStartStop, handleReset }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>
      <button id="start_stop" onClick={handleStartStop}>
        {timerLabel === 'Session' && timeLeft > 0 ? 'Start' : 'Pause'}
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
