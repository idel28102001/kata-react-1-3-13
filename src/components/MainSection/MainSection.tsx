import './MainSection.css';
import React from 'react';
import { TaskInterface } from '../../types/TaskInterface';
import { TaskFilterItemInterface } from '../../types/TaskFilterInterface';
import TaskList from '../TaskList';
import Footer from '../Footer/Footer';
import { RefactorTaskMethods } from '../../types/RefactorTask';
import { ChangeTasks } from '../../types/FilterTasks';

interface MainSectionPropsInterface {
  tasks: Array<TaskInterface>;
  filters: Array<TaskFilterItemInterface>;
  refactorFunctions: RefactorTaskMethods;
  changeTasks: ChangeTasks;
}

class MainSection extends React.Component<MainSectionPropsInterface, unknown> {
  itemsLeft() {
    return this.props.tasks.filter((e) => !e.isDone).length;
  }

  render() {
    return (
      <section className='main'>
        <TaskList refactorFunctions={this.props.refactorFunctions} tasks={this.props.tasks} />
        <Footer
          changeTasks={this.props.changeTasks}
          itemsLeft={this.itemsLeft()}
          filters={this.props.filters}
        />
      </section>
    );
  }
}

export default MainSection;
