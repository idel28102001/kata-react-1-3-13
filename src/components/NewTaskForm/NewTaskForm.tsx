import './NewTaskForm.css';
import React, { createRef } from 'react';
import { TaskPropsInterface } from '../../types/TaskInterface';
import TaskInstance from '../../common/TaskInstance';
import { AddTaskType } from '../../types/RefactorTask';

interface NewTaskFormPropsInterface {
  addTask: AddTaskType;
}

class NewTaskForm extends React.Component<NewTaskFormPropsInterface, unknown> {
  ref: React.RefObject<HTMLInputElement>;

  constructor(props: NewTaskFormPropsInterface) {
    super(props);
    this.ref = createRef<HTMLInputElement>();
    this.addTask = this.addTask.bind(this);
  }

  addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.ref.current) {
      const current = this.ref.current;
      if (current.value.trim()) {
        const newTask: TaskPropsInterface = TaskInstance(current.value);
        this.props.addTask(newTask);
        current.value = '';
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.addTask}>
        <input ref={this.ref} className='new-todo' placeholder='What needs to be done?' autoFocus />
        <input type='submit' className='new-todo-submit' />
      </form>
    );
  }
}

export default NewTaskForm;
