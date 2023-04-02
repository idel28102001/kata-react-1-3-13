import './MainSection.css';
import React from 'react';

import { TaskInterface } from '../../types/TaskInterface';
import { TaskFilterItemInterface } from '../../types/TaskFilterInterface';
import TaskList from '../TaskList';
import Footer from '../Footer';
import { RefactorTaskMethods } from '../../types/RefactorTask';
import { ChangeTasks } from '../../types/FilterTasks';

interface MainSectionPropsInterface {
  tasks: Array<TaskInterface>;
  filters: Array<TaskFilterItemInterface>;
  refactorFunctions: RefactorTaskMethods;
  changeTasks: ChangeTasks;
  itemsLeft: number;
}

export default class MainSection extends React.Component<MainSectionPropsInterface, unknown> {
  render() {
    return (
      <section className="main">
        <TaskList refactorFunctions={this.props.refactorFunctions} tasks={this.props.tasks} />
        <Footer changeTasks={this.props.changeTasks} itemsLeft={this.props.itemsLeft} filters={this.props.filters} />
      </section>
    );
  }
}
