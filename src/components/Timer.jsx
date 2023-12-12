import React, { useEffect, useState } from "react";
import ModalTimer from "./ModalTimer";
import TimerProgressBar from "./TimerProgressBar";
import sound from '../assets/alarm.mp3'

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [initTime, setInitTime] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 100);
      }, 100);

      return () => clearInterval(interval);
    } else if (time === 0) {
      setIsActive(false);
      playAlarm()
    }
  }, [isActive, time,]);

  function playAlarm(){
    new Audio(sound).play()
  }

  useEffect(() => {
    const time = localStorage.getItem("time");
    if (time) {
      setInitTime(parseInt(time));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("time", time);
  }, [time]);

  const percentage = (time / initTime) * 100;
  percentage.toFixed(2);

  const toggleTimer = () => {
    if (setIsActive(!isActive)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  function getTimer(time) {
    const total = time / 1000;
    const min = Math.floor(total / 60);
    const sec = Math.floor(total % 60);
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  }

  const handleCount = (inc) => {
    if (inc) {
      setTime(time + 1000 * 60);
      setInitTime(time + 1000 * 60);
    } else {
      setTime(time - 1000 * 60);
      setInitTime(time - 1000 * 60);
    }
  };

  const handleCountSeconds = (inc) => {
    if (inc) {
      setTime(time + 1000);
      setInitTime(time + 1000);
    } else {
      setTime(time - 1000);
      setInitTime(time - 1000);
    }
  };

  const handlerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container__timer">
      <h1 className="timer__title">Timer</h1>
      <div className="timer">
        {isOpen ? (
          <ModalTimer
            handleCount={handleCount}
            handleCountSeconds={handleCountSeconds}
            getTimer={getTimer}
            time={time}
            toggleTimer={toggleTimer}
            resetTimer={resetTimer}
            isActive={isActive}
            isOpen={isOpen}
          />
        ) : (
          <TimerProgressBar
            percentage={percentage}
            getTimer={getTimer}
            time={time}
            handlerMenu={handlerMenu}
            isActive={isActive}
            resetTimer={resetTimer}
            toggleTimer={toggleTimer}
          />
        )}
      </div>
    </div>
  );
};

export default Timer;
