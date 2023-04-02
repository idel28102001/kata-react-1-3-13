import './TasksFilterItem.css';
import React from 'react';

import { TaskFilterItemInterface } from '../../types/TaskFilterInterface';
import { FilterTasks } from '../../types/FilterTasks';

interface TaskFilterItemPropsInterface {
  item: TaskFilterItemInterface;
  filterTasks: FilterTasks;
}

export default class TasksFilterItem extends React.Component<TaskFilterItemPropsInterface, unknown> {
  filterTasks = () => {
    this.props.filterTasks(this.props.item.value);
  };

  render() {
    return (
      <>
        <input
          type="radio"
          id={this.props.item.value}
          name="filter"
          value={this.props.item.value}
          onChange={this.filterTasks}
          className="filters__radio"
          defaultChecked={this.props.item.checked}
        />
        <label htmlFor={this.props.item.value} className="filters__label">
          {this.props.item.label}
        </label>
      </>
    );
  }
}
