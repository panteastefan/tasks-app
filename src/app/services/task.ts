export enum Status {
  NEW = 'NEW',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE'
}

export interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
  status: Status;
}
