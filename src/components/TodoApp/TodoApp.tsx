import './TodoApp.css';
import React from 'react';

import Header from '../Header';
import Main from '../Main';
import { ChangeTasks } from '../Footer/Footer';
import { TaskFilterFlags, TaskFilters } from '../TasksFilterItem/TasksFilterItem';
import { RefactorTaskMethods } from '../Task/Task';
import { TaskInterface, TaskPropsInterface } from '../../common/createTask';
import { AddTaskType } from '../NewTaskForm/NewTaskForm';

interface TodoAppPropsInterface {
  filters: Array<TaskFilters>;
}

interface TodoAppStateInterface {
  tasks: Array<TaskInterface>;
  filters: Array<TaskFilters>;
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

  componentDidUpdate() {
    this.saveTasks(this.state.tasks);
  }

  saveTasks = (tasks: Array<TaskInterface>): void => {
    const jsonString = JSON.stringify(tasks || []);
    localStorage.setItem('tasks', jsonString);
  };

  loadTasks = (): TaskInterface[] => {
    const jsonString = localStorage.getItem('tasks') || '';
    let result: Array<TaskInterface>;
    try {
      result = JSON.parse(jsonString) || [];
    } catch (e: unknown) {
      result = [];
    }
    return result.map((e) => ({ ...e, createdAt: new Date(e.createdAt) }));
  };

  removeCompleted: ChangeTasks['removeCompleted'] = () => {
    this.setState({ tasks: this.state.tasks.filter((e) => !e.isDone) });
  };

  filterTasks: ChangeTasks['filterTasks'] = (flag: TaskFilterFlags) => {
    this.setState({ flag });
  };

  addTask: AddTaskType = (task: TaskPropsInterface) => {
    const id = Math.max(...[...this.state.tasks.map((e) => e.id), 0]) + 1;
    const newTasks = [...this.state.tasks, { ...task, id }];
    this.setState({ tasks: newTasks });
  };

  removeTask: RefactorTaskMethods['removeTask'] = (id: number) => {
    this.setState({ tasks: this.state.tasks.filter((e) => e.id !== id) });
  };

  completeTask: RefactorTaskMethods['completeTask'] = (id: number, isDone: boolean) => {
    const currTasks = this.state.tasks.map((e) => {
      if (e.id !== id) return e;
      return { ...e, isDone };
    });
    this.setState({ tasks: currTasks });
  };

  editTask: RefactorTaskMethods['editTask'] = (id: number, description: string) => {
    const currTasks = this.state.tasks.map((e) => {
      if (e.id !== id) return e;
      return { ...e, description };
    });
    this.setState({ tasks: currTasks });
  };

  filteredTasks = (): TaskInterface[] => {
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

  itemsLeft(): number {
    return this.state.tasks.filter((e) => !e.isDone).length;
  }

  render() {
    return (
      <section className="todoapp">
        <Header addTask={this.addTask} />
        <Main
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
