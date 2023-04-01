import React from 'react';
import './TaskList.css';
import { RefactorTaskMethods } from '../../types/RefactorTask';
import PropTypes from 'prop-types';
import Task from '../Task';
import { TaskInterface } from '../../types/TaskInterface';

interface TaskListPropsInterface {
  tasks: Array<TaskInterface>;
  refactorFunctions: RefactorTaskMethods;
}

export default class TaskList extends React.Component<TaskListPropsInterface, unknown> {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
  };

  static defaultProps = {
    tasks: [],
  };

  render() {
    return (
      <ul className='todo-list'>
        {this.props.tasks.map((task) => (
          <Task refactorFunctions={this.props.refactorFunctions} task={task} key={task.id} />
        ))}
      </ul>
    );
  }
}
