import React, { useState, useEffect } from "react";
import "../../src/home/home.scss";
import Break from "../break/break";

function Home() {
    const [time, setTime] = useState(20 * 60); // 20 mins in seconds
    const [isRunning, setIsRunning] = useState(false);

    // Timer logic
    useEffect(() => {
        let timer;

        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isRunning, time]);

    // Format time (mm:ss)
    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="ht-100vh">
            <h1 className="text-center">Home</h1>

            <div className="col-sm-12 d-flex justify-content-center">
                <div className="col-sm-10 d-flex justify-content-around">

                    <div className="card w-25 bg-dark text-white p-3">
                        <img
                            className="card-img-top"
                            src="/gif/clock.gif"
                            alt="timer gif"
                        />

                        <div className="card-body text-center">
                            <h1 className="card-title">{formatTime()}</h1>

                            <p className="card-text">
                                Focus for 20 mins, then take a short break
                            </p>

                            <div className="d-flex justify-content-around">

                                <button
                                    className="btn btn-success"
                                    onClick={() => setIsRunning(true)}
                                >
                                    Start
                                </button>

                                <button
                                    className="btn btn-warning"
                                    onClick={() => setIsRunning(false)}
                                >
                                    Pause
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        setIsRunning(false);
                                        setTime(20 * 60);
                                    }}
                                >
                                    Reset
                                </button>

                            </div>
                        </div>
                    </div>
                    <Break />
                </div>
            </div>
        </div>
    );
}

export default Home;