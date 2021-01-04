import React, { useState, useEffect } from 'react';
import './Countdown.css';

export default function Countdown(){
    const [countdownTrigger, setCountdownTrigger] = useState(false);
    const [totalTime, setTotalTime] = useState(300);
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        countdownTrigger && totalTime > 0 && setTimeout(() => setTotalTime(totalTime - 1), 1000);

        let minutesResult = (Math.floor(totalTime / 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        let secondsResult = ((totalTime % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}))

        setMinutes(minutesResult);
        setSeconds(secondsResult);
    }, [totalTime, countdownTrigger]);

    const handleCountdown = () => {
        setCountdownTrigger(!countdownTrigger);
    }

    const countdownButtonText = countdownTrigger ? "Stop" : "Start";

    return(
        <div className={'countdown-container'}>
            <h2>
                {minutes} : {seconds}
            </h2>

            <p/>

            <button onClick={handleCountdown}>
                {countdownButtonText}
            </button>
        </div>
    )
}
