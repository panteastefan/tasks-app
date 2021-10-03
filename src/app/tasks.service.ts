import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Task } from "./task";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiServerUrl}/tasks/all`);
  }

  public getUserTasks(): Observable<Task[]> {
    return this.http.post<Task[]>(`${this.apiServerUrl}/tasks/mine`, {userId: 2});
  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiServerUrl}/tasks/add`, task);
  }

  public updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiServerUrl}/tasks/add`, task);
  }

  public deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/tasks/delete/${taskId}`);
  }
}
