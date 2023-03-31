import React from 'react';
import Task from '../Task';
import './TaskList.css';
import { TaskInterface } from '../../types/TaskInterface';
import { RefactorTaskMethods } from '../../types/RefactorTask';

interface TaskListPropsInterface {
  tasks: Array<TaskInterface>;
  refactorFunctions: RefactorTaskMethods;
}

class TaskList extends React.Component<TaskListPropsInterface, unknown> {
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

export default TaskList;
