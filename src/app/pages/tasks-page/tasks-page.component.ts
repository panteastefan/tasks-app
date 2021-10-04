import { Component, OnInit } from '@angular/core';
import {Task} from "../../components/models/task";
import {TasksService} from "../../services/tasks/tasks.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  public tasks!: Task[];
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.getUserTasks();
  }
  public getUserTasks(): void {
    this.taskService.getUserTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
