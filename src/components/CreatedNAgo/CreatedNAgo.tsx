import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import './CreatedNAgo.css';

interface CreatedNAgoPropsInterface {
  createdAt: Date;
}

interface CreatedNAgoStateInterface {
  render: number;
}

export default class CreatedNAgo extends React.Component<
  CreatedNAgoPropsInterface,
  CreatedNAgoStateInterface
> {
  state = { render: 0 };
  isDidMount = false;

  componentDidMount() {
    if (!this.isDidMount) {
      setTimeout(() => {
        this.setState((e) => ({ render: e.render + 1 }));
      }, 1000);
      this.isDidMount = true;
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState((e) => ({ render: e.render + 1 }));
    }, 1000);
  }

  createdAt() {
    return `created ${formatDistanceToNow(this.props.createdAt)} ago`;
  }

  render() {
    return <span className='created'>{this.createdAt()}</span>;
  }
}
