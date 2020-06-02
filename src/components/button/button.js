import React from 'react';
import * as classes from './button.module.scss';

const Button = (props) => {
  const handleStartTimer = (id, startTime, endTime) => {
    return (props.startTimer(props.time, id, startTime, endTime))
  }

  const handleClick = () => {
    let timeClick = new Date();
    let startTime = timeClick.toString();
    const { buttonSelected, id, endTime } = props;

    buttonSelected(id, startTime);
    handleStartTimer(id, startTime, endTime);
  };

  return (
    <>
      {
        props.timeLeft ? <button disabled>
          Кнопка {props.time}
        </button> : <button onClick={handleClick}>
            Кнопка {props.time}
          </button>
      }
    </>
  )
}

export default Button;