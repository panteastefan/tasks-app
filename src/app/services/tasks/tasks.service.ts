import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Task } from "../../models/task";
import {environment} from "../../../environments/environment";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public getTasks(): Observable<Task[]> {
    return this.http.post<Task[]>(`${this.apiServerUrl}/tasks/all`,
      {userToken: this.cookieService.get("lgnck")});
  }

  public getUserTasks(): Observable<Task[]> {
    return this.http.post<Task[]>(`${this.apiServerUrl}/tasks/mine`,
      {userToken: this.cookieService.get("lgnck")});
  }

  public addTask(taskCreationDTO: Task): Observable<Task> {
      return this.http.post<Task>(`${this.apiServerUrl}/tasks/add`,
        {userToken: this.cookieService.get("lgnck"), taskCreationDTO});
  }

  public updateTask(taskCreationDTO: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiServerUrl}/tasks/update`,
      {userToken: this.cookieService.get("lgnck"), taskCreationDTO});
  }

  public deleteTask(taskId: number): Observable<number> {
    return this.http.post<number>(`${this.apiServerUrl}/tasks/delete`,
      {userToken: this.cookieService.get("lgnck"), taskId});
  }
}
