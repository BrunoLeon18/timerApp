import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ButtonStarStop from "./ButtonStarStop";

const TimerProgressBar = ({
  percentage,
  getTimer,
  time,
  handlerMenu,
  isActive,
  resetTimer,
  toggleTimer
}) => {
  return (
    <div className="timer__progress">
      <CircularProgressbar
        value={percentage}
        text={getTimer(time)}
        strokeWidth={2}
        background={true}
        styles={buildStyles({
          pathColor: "#ffa500",
          trailColor: "#555",
          textColor: "#fff",
          backgroundColor: "#000",
        })}
      />
      {time > 0 ? (
        <ButtonStarStop
          toggleTimer={toggleTimer}
          resetTimer={resetTimer}
          isActive={isActive}
        />
      ) : (
        <p className="timer__menu" onClick={handlerMenu}>
          <i className='bx bx-timer'></i>
        </p>
      )}
    </div>
  );
};

export default TimerProgressBar;
