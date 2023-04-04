export interface TaskPropsInterface {
  description: string;
  createdAt: Date;
  isDone: boolean;
}

export interface TaskInterface extends TaskPropsInterface {
  id: number;
}

export default function CreateTask(description: string): TaskPropsInterface {
  return { description, createdAt: new Date(), isDone: false };
}
