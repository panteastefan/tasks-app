import {Status} from "./status";
import {User} from "./user";

export interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
  status: Status;
  user: User;
}
