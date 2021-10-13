import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksTableControlService {
  constructor() { }
  private updateTasksEvent = new Subject<any>();
  private updateTasksTableEvent = new Subject<any>();

  updateTasksEvent$ = this.updateTasksEvent.asObservable();
  updateTasksTableEvent$ = this.updateTasksTableEvent.asObservable();

  eventUpdateTasks(){
    this.updateTasksEvent.next();
  }

  eventUpdateTasksTable(){
    this.updateTasksTableEvent.next();
  }
}
