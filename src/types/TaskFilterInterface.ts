export enum TaskFilterFlags {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export interface TaskFilters {
  id: number;
  value: TaskFilterFlags;
  label: string;
  checked: boolean;
}
