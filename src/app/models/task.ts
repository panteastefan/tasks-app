import {Status} from "./status";

export class Task {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
  status: Status;
  username: string;
  constructor(name: string, description: string, dueDate: Date, status: Status, username: string) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.username = username;
  }
}
