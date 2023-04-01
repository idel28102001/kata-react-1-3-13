import React, { createRef } from 'react';
import './Task.css';
import { TaskInterface } from '../../types/TaskInterface';
import { RefactorTaskMethods } from '../../types/RefactorTask';

interface TaskItemPropsInterface {
  task: TaskInterface;
  refactorFunctions: RefactorTaskMethods;
}

interface TaskItemStateInterface {
  isEditing: boolean;
}

export default class Task extends React.PureComponent<
  TaskItemPropsInterface,
  TaskItemStateInterface
> {
  ref: React.RefObject<HTMLInputElement>;

  constructor(props: TaskItemPropsInterface) {
    super(props);
    this.state = { isEditing: false };
    this.ref = createRef<HTMLInputElement>();
  }

  setToEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState((e) => ({ isEditing: !e.isEditing }));
  };

  editTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.ref.current) {
      const current = this.ref.current;
      const value = current.value.trim();
      if (value !== this.props.task.description) {
        if (!value) {
          this.ref.current.value = this.props.task.description;
        } else {
          this.props.refactorFunctions.editTask(this.props.task.id, value);
        }
      }
    }
    this.setState((e) => ({ isEditing: !e.isEditing }));
  };

  render() {
    const task = this.props.task;
    const liClass = this.state.isEditing ? 'editing' : task.isDone ? 'completed' : '';
    return (
      <li className={liClass}>
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            defaultChecked={task.isDone}
            onChange={(e) => this.props.refactorFunctions.completeTask(task.id, e.target.checked)}
          />
          <label>
            <span className='description'>{task.description}</span>
            <span className='created'>created 5 minutes ago</span>
          </label>
          <button className='icon icon-edit' onClick={this.setToEdit} />
          <button
            className='icon icon-destroy'
            onClick={() => this.props.refactorFunctions.removeTask(task.id)}
          />
        </div>
        <form onSubmit={this.editTask}>
          {this.state.isEditing && (
            <input
              ref={this.ref}
              type='text'
              className='edit'
              defaultValue={task.description}
              autoFocus
            />
          )}
          <input type='submit' className='edit-submit' />
        </form>
      </li>
    );
  }
}
