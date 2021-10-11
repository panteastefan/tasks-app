import {Status} from "./status";

export class Task {
  id: number;
  name: string;
  description: string;
  dueDate: string;
  status: Status;
  username: string;

  constructor(id: number, name: string, description: string, dueDate: string, status: Status, username: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.username = username;
  }
}
