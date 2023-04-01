import { TaskPropsInterface } from '../types/TaskInterface';

export default function TaskInstance(description: string): TaskPropsInterface {
  return { description, createdAt: new Date(), isDone: false };
}
