import React from 'react';

const Controls = ({ sessionLength, breakLength, setSessionLength, setBreakLength }) => {
  return (
    <div className="controls">
      <div id="break-label">Break Length</div>
      <button
        id="break-decrement"
        onClick={() => breakLength > 1 && setBreakLength(breakLength - 1)}
      >
        -
      </button>
      <span id="break-length">{breakLength}</span>
      <button
        id="break-increment"
        onClick={() => breakLength < 60 && setBreakLength(breakLength + 1)}
      >
        +
      </button>

      <div id="session-label">Session Length</div>
      <button
        id="session-decrement"
        onClick={() => sessionLength > 1 && setSessionLength(sessionLength - 1)}
      >
        -
      </button>
      <span id="session-length">{sessionLength}</span>
      <button
        id="session-increment"
        onClick={() => sessionLength < 60 && setSessionLength(sessionLength + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Controls;
