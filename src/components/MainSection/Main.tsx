import './Main.css';
import React from 'react';

import { TaskInterface } from '../../types/TaskInterface';
import { TaskFilters } from '../../types/TaskFilterInterface';
import TaskList from '../TaskList';
import Footer from '../Footer';
import { RefactorTaskMethods } from '../../types/RefactorTask';
import { ChangeTasks } from '../../types/FilterTasks';

interface MainSectionPropsInterface {
  tasks: Array<TaskInterface>;
  filters: Array<TaskFilters>;
  refactorFunctions: RefactorTaskMethods;
  changeTasks: ChangeTasks;
  itemsLeft: number;
}

export default class Main extends React.Component<MainSectionPropsInterface, unknown> {
  render() {
    return (
      <main className="main">
        <TaskList refactorFunctions={this.props.refactorFunctions} tasks={this.props.tasks} />
        <Footer changeTasks={this.props.changeTasks} itemsLeft={this.props.itemsLeft} filters={this.props.filters} />
      </main>
    );
  }
}
