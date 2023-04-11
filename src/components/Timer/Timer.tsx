import './Timer.css';
import React from 'react';
import { format } from 'date-fns';

interface TimerState {
  currTime: number;
}

export default class Timer extends React.Component<unknown, TimerState> {
  state: TimerState = { currTime: 0 };
  interval = -1 as never as NodeJS.Timer;

  componentDidMount() {
    this.turnTimerOn();
  }

  turnTimerOn() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState(({ currTime }) => ({ currTime: currTime + 1 }));
    }, 1000);
  }

  turnTimerOff() {
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    this.turnTimerOff();
  }

  calculateTimer() {
    const date = new Date(this.state.currTime * 1000);
    return format(date, 'm:ss');
  }

  render() {
    return (
      <span className="description">
        <button className="icon icon-play" onClick={() => this.turnTimerOn()} />
        <button className="icon icon-pause" onClick={() => this.turnTimerOff()} />
        {this.calculateTimer()}
      </span>
    );
  }
}
