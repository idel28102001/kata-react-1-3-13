import { TaskPropsInterface } from '../types/TaskInterface';

function TaskInstance(description: string): TaskPropsInterface {
  return { description, createdAt: new Date(), isDone: false };
}

export default TaskInstance;
