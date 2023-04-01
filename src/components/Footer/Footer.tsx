import React from 'react';
import './Footer.css';
import TasksFilter from '../TasksFilter';
import { TaskFilterItemInterface } from '../../types/TaskFilterInterface';
import { ChangeTasks } from '../../types/FilterTasks';

interface FooterPropsInterface {
  filters: Array<TaskFilterItemInterface>;
  itemsLeft: number;
  changeTasks: ChangeTasks;
}

export default class Footer extends React.Component<FooterPropsInterface, unknown> {
  render() {
    return (
      <footer className='footer'>
        <span className='todo-count'>{this.props.itemsLeft} items left</span>
        <TasksFilter
          filterTasks={this.props.changeTasks.filterTasks}
          filters={this.props.filters}
        />
        <button onClick={this.props.changeTasks.removeCompleted} className='clear-completed'>
          Clear completed
        </button>
      </footer>
    );
  }
}
