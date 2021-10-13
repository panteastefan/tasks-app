import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksTableControlService {
  constructor() { }
  private updateUserTasksEvent = new Subject<any>();
  private updateTasksEvent = new Subject<any>();

  updateUserTasksEvent$ = this.updateUserTasksEvent.asObservable();
  updateTasksEvent$ = this.updateTasksEvent.asObservable();

  eventUpdateUserTasks(){
    this.updateUserTasksEvent.next();
  }

  eventUpdateTasks(){
    this.updateTasksEvent.next();
  }
}
