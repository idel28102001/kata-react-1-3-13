import './TasksFilter.css';
import React from 'react';
import PropTypes from 'prop-types';

import TasksFilterItem from '../TasksFilterItem';
import { TaskFilterItemInterface } from '../../types/TaskFilterInterface';
import { FilterTasks } from '../../types/FilterTasks';

interface TaskFilterPropsInterface {
  filters: Array<TaskFilterItemInterface>;
  filterTasks: FilterTasks;
}

export default class TasksFilter extends React.Component<TaskFilterPropsInterface, unknown> {
  static propTypes = {
    filters: PropTypes.array.isRequired,
  };

  static defaultProps = {
    filters: [],
  };

  render() {
    return (
      <ul className="filters">
        {this.props.filters.map((filter) => {
          return (
            <li key={filter.id} className="filters__item">
              <TasksFilterItem filterTasks={this.props.filterTasks} item={filter} />
            </li>
          );
        })}
      </ul>
    );
  }
}
