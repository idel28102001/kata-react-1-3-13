export interface TaskPropsInterface {
  description: string;
  createdAt: Date;
  isDone: boolean;
}

export interface TaskInterface extends TaskPropsInterface {
  id: number;
}
