import React, { Component } from 'react';
import LogItem from '../log-item';
import * as classes from './timer-display.module.scss';

const TimerDisplay = ({ activities, timeLeft }) => {

  if (timeLeft === 0) {
    return activities.map((item, id) => {
      const { ...itemProps } = item;
      return (
        <li key={id} >
          <LogItem
            {...itemProps}
          />
        </li>
      );
    });

  }

  if (timeLeft === 0 || timeLeft === null) {
    return <div></div>
  }

  return (
    <div className="timerDisplay">
      <h2>Лог</h2>
      {timeLeft}
    </div>
  )
}

export default TimerDisplay;