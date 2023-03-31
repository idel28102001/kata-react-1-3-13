import { TaskPropsInterface } from './TaskInterface';

export type AddTaskType = (arg: TaskPropsInterface) => void;
export type RemoveTaskType = (id: number) => void;
export type CompleteTaskType = (id: number, isDone: boolean) => void;
export type EditTaskType = (id: number, description: string) => void;

export interface RefactorTaskMethods {
  removeTask: RemoveTaskType;
  completeTask: CompleteTaskType;
  editTask: EditTaskType;
}
