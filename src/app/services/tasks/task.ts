import {Status} from "../status";

export interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
  status: Status;
}
