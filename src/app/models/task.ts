import {Status} from "./status";

export class Task {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
  status: Status;
  user: string;
  constructor(name: string, description: string, dueDate: Date, status: Status, user: string) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.user = user;
  }
}
