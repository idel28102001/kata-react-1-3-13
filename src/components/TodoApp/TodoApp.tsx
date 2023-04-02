import './TodoApp.css';
import React from 'react';

import Header from '../Header';
import MainSection from '../MainSection';
import { TaskInterface, TaskPropsInterface } from '../../types/TaskInterface';
import { TaskFilterFlags, TaskFilterItemInterface } from '../../types/TaskFilterInterface';
import { RefactorTaskMethods } from '../../types/RefactorTask';
import { ChangeTasks } from '../../types/FilterTasks';

interface TodoAppPropsInterface {
  filters: Array<TaskFilterItemInterface>;
}

interface TodoAppStateInterface {
  tasks: Array<TaskInterface>;
  filters: Array<TaskFilterItemInterface>;
  flag: TaskFilterFlags;
}

export default class TodoApp extends React.Component<TodoAppPropsInterface, TodoAppStateInterface, null> {
  refactorFunctions: { current: RefactorTaskMethods };
  changeFunctions: { current: ChangeTasks };

  constructor(props: TodoAppPropsInterface) {
    super(props);
    this.refactorFunctions = {
      current: {
        completeTask: this.completeTask,
        removeTask: this.removeTask,
        editTask: this.editTask,
      },
    };
    this.changeFunctions = {
      current: { removeCompleted: this.removeCompleted, filterTasks: this.filterTasks },
    };
    const tasks = this.loadTasks();
    this.state = { ...props, tasks, flag: TaskFilterFlags.ALL };
  }

  saveTasks = (tasks: Array<TaskInterface>) => {
    const jsonString = JSON.stringify(tasks || []);
    localStorage.setItem('tasks', jsonString);
  };

  componentDidUpdate() {
    this.saveTasks(this.state.tasks);
  }

  loadTasks = () => {
    const jsonString = localStorage.getItem('tasks') || '';
    let result: Array<TaskInterface>;
    try {
      result = JSON.parse(jsonString) || [];
    } catch (e: unknown) {
      result = [];
    }
    return result.map((e) => ({ ...e, createdAt: new Date(e.createdAt) }));
  };

  filteredTasks = () => {
    switch (this.state.flag) {
      case TaskFilterFlags.ALL: {
        return this.state.tasks;
      }
      case TaskFilterFlags.ACTIVE: {
        return this.state.tasks.filter((e) => !e.isDone);
      }
      case TaskFilterFlags.COMPLETED: {
        return this.state.tasks.filter((e) => e.isDone);
      }
    }
  };

  removeCompleted = () => {
    this.setState({ tasks: this.state.tasks.filter((e) => !e.isDone) });
  };

  filterTasks = (flag: TaskFilterFlags) => {
    this.setState({ flag });
  };

  addTask = (task: TaskPropsInterface) => {
    const id = Math.max(...[...this.state.tasks.map((e) => e.id), 0]) + 1;
    const newTasks = [...this.state.tasks, { ...task, id }];
    this.setState({ tasks: newTasks });
  };

  removeTask = (id: number) => {
    this.setState({ tasks: this.state.tasks.filter((e) => e.id !== id) });
  };

  completeTask = (id: number, isDone: boolean) => {
    const currTasks = this.state.tasks.map((e) => {
      if (e.id !== id) return e;
      return { ...e, isDone };
    });
    this.setState({ tasks: currTasks });
  };

  editTask = (id: number, description: string) => {
    const currTasks = this.state.tasks.map((e) => {
      if (e.id !== id) return e;
      return { ...e, description };
    });
    this.setState({ tasks: currTasks });
  };

  itemsLeft() {
    return this.state.tasks.filter((e) => !e.isDone).length;
  }

  render() {
    return (
      <section className="todoapp">
        <Header addTask={this.addTask} />
        <MainSection
          itemsLeft={this.itemsLeft()}
          changeTasks={this.changeFunctions.current}
          refactorFunctions={this.refactorFunctions.current}
          tasks={this.filteredTasks()}
          filters={this.state.filters}
        />
      </section>
    );
  }
}
