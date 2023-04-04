import { TaskPropsInterface } from '../types/TaskInterface';

export default function CreateTask(description: string): TaskPropsInterface {
  return { description, createdAt: new Date(), isDone: false };
}
