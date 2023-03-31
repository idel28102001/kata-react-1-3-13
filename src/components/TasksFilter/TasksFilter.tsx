import React from 'react';
import './TasksFilter.css';
import TasksFilterItem from '../TasksFilterItem/TasksFilterItem';
import { TaskFilterItemInterface } from '../../types/TaskFilterInterface';
import { FilterTasks } from '../../types/FilterTasks';

interface TaskFilterPropsInterface {
  filters: Array<TaskFilterItemInterface>;
  filterTasks: FilterTasks;
}

class TasksFilter extends React.Component<TaskFilterPropsInterface, unknown> {
  constructor(props: TaskFilterPropsInterface) {
    super(props);
  }

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

export default TasksFilter;
