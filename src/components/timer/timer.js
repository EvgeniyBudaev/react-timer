import React, { Component } from 'react';
import Button from '../button';
import TimerDisplay from '../timer-display';
import * as classes from './timer.module.scss';
import Reset from '../reset';

class Timer extends Component {
  state = {
    timeLeft: null,
    timer: null,
    id: null,
    startTime: null,
    activities: [],
    now: new Date(),
    endTime: null
  }

  startTimer = (timeLeft, id, startTime, endTime) => {
    const activities = this.state.activities;
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1
      if (timeLeft === 0) {
        activities.push({
          id: id,
          startTime: startTime,
          endTime: endTime
        });
        clearInterval(timer)
      }
      this.setState({
        timeLeft: timeLeft
      })
    }, id * 1000)
    return this.setState({
      timeLeft: timeLeft,
      timer: timer
    })
  }

  buttonSelected = (id, startTime) => {
    this.setState({
      id,
      startTime
    })
  }

  handleReset = () => {
    this.setState({
      activities: []
    })
  }

  render() {
    const { timeLeft, id, startTime, activities, now } = this.state;
    let endTime = now.toString();

    return (
      <div className={classes.Timer}>
        <Button time="1" id={1} startTimer={this.startTimer} buttonSelected={this.buttonSelected} endTime={endTime} timeLeft={timeLeft} />
        <Button time="2" id={2} startTimer={this.startTimer} buttonSelected={this.buttonSelected} endTime={endTime} timeLeft={timeLeft} />
        <Button time="3" id={3} startTimer={this.startTimer} buttonSelected={this.buttonSelected} endTime={endTime} timeLeft={timeLeft} />
        <Reset handleReset={this.handleReset} timeLeft={timeLeft} />
        <h3>Лог</h3>
        <div className={classes.Log}>
          <TimerDisplay timeLeft={timeLeft} id={id} startTime={startTime} endTime={endTime} activities={activities} />
        </div>

      </div>
    )
  }
}

export default Timer;