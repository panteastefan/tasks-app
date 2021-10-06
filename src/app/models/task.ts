import {Status} from "./status";

export class Task {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
  status: Status;
  userId: number;
}
