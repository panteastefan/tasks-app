import { Task } from './services/task';
import {Component, OnInit} from "@angular/core";
import {TasksService} from "./services/tasks.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public tasks!: Task[];

  constructor(private taskService: TasksService) {
  }

  ngOnInit() {
    this.getTasks();
  }

  public getTasks(): void {
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
