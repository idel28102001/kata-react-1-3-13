import React from 'react';
import './TasksFilter.css';
import TasksFilterItem from '../TasksFilterItem';
import { TaskFilterItemInterface } from '../../types/TaskFilterInterface';
import { FilterTasks } from '../../types/FilterTasks';

interface TaskFilterPropsInterface {
  filters: Array<TaskFilterItemInterface>;
  filterTasks: FilterTasks;
}

export default class TasksFilter extends React.Component<TaskFilterPropsInterface, unknown> {
  render() {
    return (
      <ul className='filters'>
        {this.props.filters.map((filter) => {
          return (
            <li key={filter.id} className='filters__item'>
              <TasksFilterItem filterTasks={this.props.filterTasks} item={filter} />
            </li>
          );
        })}
      </ul>
    );
  }
}
