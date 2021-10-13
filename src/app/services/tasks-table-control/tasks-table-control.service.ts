import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksTableControlService {
  constructor() { }
  private updateUserTasksEvent = new Subject<any>();
  private updateTasksTableEvent = new Subject<any>();

  updateUserTasksEvent$ = this.updateUserTasksEvent.asObservable();
  updateTasksTableEvent$ = this.updateTasksTableEvent.asObservable();

  eventUpdateUserTasks(){
    this.updateUserTasksEvent.next();
  }

  eventUpdateTasksTable(){
    this.updateTasksTableEvent.next();
  }
}
