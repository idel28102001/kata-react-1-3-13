import React from 'react';

import './App.css';
import { TaskInterface } from '../types/TaskInterface';
import { TaskFilterFlags, TaskFilterItemInterface } from '../types/TaskFilterInterface';
import TodoApp from '../components/TodoApp/TodoApp';

export default class App extends React.Component<unknown, unknown> {
  tasks: Array<TaskInterface> = [
    {
      description: 'Completed task',
      createdAt: new Date(),
      isDone: true,
      id: 1,
    },
    { description: 'Editing task', createdAt: new Date(), isDone: false, id: 2 },
    {
      description: 'Active task',
      createdAt: new Date(),
      isDone: false,
      id: 3,
    },
  ];
  filters: Array<TaskFilterItemInterface> = [
    { value: TaskFilterFlags.ALL, checked: true, label: 'All', id: 1 },
    {
      value: TaskFilterFlags.ACTIVE,
      checked: false,
      label: 'Active',
      id: 2,
    },
    { value: TaskFilterFlags.COMPLETED, checked: false, label: 'Completed', id: 3 },
  ];

  render() {
    return (
      <div className="App">
        <TodoApp filters={this.filters} tasks={this.tasks} />
      </div>
    );
  }
}
