export enum TaskFilterFlags {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export interface TaskFilterItemInterface {
  id: number;
  value: TaskFilterFlags;
  label: string;
  checked: boolean;
}
