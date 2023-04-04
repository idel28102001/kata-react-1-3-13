import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import './CreatedNAgo.css';

interface CreatedNAgoPropsInterface {
  createdAt: Date;
}

interface CreatedNAgoState {
  render: number;
}

export default class CreatedNAgo extends React.Component<CreatedNAgoPropsInterface, CreatedNAgoState> {
  state = { render: 0 };
  interval = -1 as any as NodeJS.Timer;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((e) => ({ render: e.render + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  createdAt() {
    return `created ${formatDistanceToNow(this.props.createdAt)} ago`;
  }

  render() {
    return <span className="created">{this.createdAt()}</span>;
  }
}
