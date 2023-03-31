import './Header.css';
import React from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import { AddTaskType } from '../../types/RefactorTask';

interface HeaderPropsInterface {
  addTask: AddTaskType;
}

class Header extends React.Component<HeaderPropsInterface, unknown> {
  constructor(props: HeaderPropsInterface) {
    super(props);
  }

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <NewTaskForm addTask={this.props.addTask} />
      </header>
    );
  }
}

export default Header;
