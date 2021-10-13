import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksTableControlService {
  constructor() { }
  private updateTasksEvent = new Subject<any>();

  updateTasksEvent$ = this.updateTasksEvent.asObservable();

  eventUpdateTasks(){
    this.updateTasksEvent.next();
  }
}
