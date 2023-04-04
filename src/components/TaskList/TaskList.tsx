import './TaskList.css';
import React from 'react';

import Task from '../Task';
import { RefactorTaskMethods } from '../../types/RefactorTask';
import { TaskInterface } from '../../types/TaskInterface';

interface TaskListPropsInterface {
  tasks: Array<TaskInterface>;
  refactorFunctions: RefactorTaskMethods;
}

export default class TaskList extends React.Component<TaskListPropsInterface, unknown> {
  render() {
    return (
      <ul className="todo-list">
        {this.props.tasks.map((task) => (
          <li key={task.id}>
            <Task refactorFunctions={this.props.refactorFunctions} task={task} />
          </li>
        ))}
      </ul>
    );
  }
}
