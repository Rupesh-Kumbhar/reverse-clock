import React, { useState, useEffect } from "react";

function Break() {
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && breakTime > 0) {
      timer = setInterval(() => {
        setBreakTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, breakTime]);

  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="card w-25 bg-dark text-white p-3 text-center">
      <h3>Break</h3>
      <h1>{formatTime(breakTime)}</h1>

      {/* Switch time */}
      <div className="mb-2">
        <button className="btn btn-light btn-sm me-2" onClick={() => setBreakTime(3 * 60)}>
          3 min
        </button>
        <button className="btn btn-light btn-sm" onClick={() => setBreakTime(5 * 60)}>
          5 min
        </button>
      </div>

      <div className="d-flex justify-content-around mt-3">
        <button className="btn btn-success" onClick={() => setIsRunning(true)}>
          Start
        </button>
        <button className="btn btn-warning" onClick={() => setIsRunning(false)}>
          Pause
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setIsRunning(false);
            setBreakTime(5 * 60);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Break;