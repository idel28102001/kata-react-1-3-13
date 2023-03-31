import { TaskFilterFlags } from './TaskFilterInterface';

export type FilterTasks = (flag: TaskFilterFlags) => void;
export type RemoveCompleted = () => void;

export interface ChangeTasks {
  filterTasks: FilterTasks;
  removeCompleted: RemoveCompleted;
}
