import './NewTaskForm.css';
import React, { createRef } from 'react';

import { TaskPropsInterface } from '../../types/TaskInterface';
import CreateTask from '../../common/createTask';
import { AddTaskType } from '../../types/RefactorTask';

interface NewTaskFormPropsInterface {
  addTask: AddTaskType;
}

export default class NewTaskForm extends React.Component<NewTaskFormPropsInterface, unknown> {
  ref: React.RefObject<HTMLInputElement>;

  constructor(props: NewTaskFormPropsInterface) {
    super(props);
    this.ref = createRef<HTMLInputElement>();
  }

  addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.ref.current) {
      const current = this.ref.current;
      if (current.value.trim()) {
        const newTask: TaskPropsInterface = CreateTask(current.value);
        this.props.addTask(newTask);
        current.value = '';
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
        <input ref={this.ref} className="new-todo" placeholder="What needs to be done?" autoFocus />
        <input type="submit" className="new-todo-submit" />
      </form>
    );
  }
}
