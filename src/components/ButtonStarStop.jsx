import React from 'react'

const ButtonStarStop = ({
    toggleTimer,
    resetTimer,
    isActive,
    time
}) => {
  return (

        <div className="modal__timer__buttons">
        <button className={ !isActive? 'modal__buttons start': 'modal__buttons stop'} onClick={toggleTimer} disabled={time === 0 ? true : false}>
          {isActive? "Pausar" : "Iniciar"}
        </button>
        <button className="modal__buttons restart" onClick={resetTimer} >
          Reiniciar
        </button>
      </div>
  )
}

export default ButtonStarStop