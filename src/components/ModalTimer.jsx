import React from "react";
import ButtonStarStop from "./ButtonStarStop";

const ModalTimer = ({
  handleCount,
  handleCountSeconds,
  time,
  getTimer,
  toggleTimer,
  resetTimer,
  isActive,
  isOpen
}) => {
  return (
    <div className="modal__timer">
      <div className="modal__button plus-up ">
        <button
          className="modal__timer__minutes plus"
          onClick={() => handleCount(true)}
        >
          <i className='bx bx-chevron-up'></i>
        </button>
        <button
          className="modal__timer__seconds plus"
          onClick={() => handleCountSeconds(true)}
        >
          <i className='bx bx-chevron-up'></i>
        </button>
      </div>
      <p className="timer-minutes">{getTimer(time)}</p>
      <div className="modal__button minus-down">
        <button
          className="modal__timer__minutes minus"
          onClick={() => handleCount(false)}
          disabled={time < 60000 ? true : false}
        >
          <i className='bx bx-chevron-down' ></i>
        </button>
        <button
          className="modal__timer__seconds minus"
          onClick={() => handleCountSeconds(false)}
          disabled={time === 0 ? true : false}
        >
          <i className='bx bx-chevron-down' ></i>
        </button>
      </div>
      <ButtonStarStop 
      isActive={isActive}
      toggleTimer={toggleTimer}
      resetTimer={resetTimer}
      />
      
    </div>
  );
};

export default ModalTimer;
