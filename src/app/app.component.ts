import { Task } from './services/tasks/task';
import { User } from './services/users/user';
import {Component, OnInit} from "@angular/core";
import {TasksService} from "./services/tasks/tasks.service";
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
    this.getUserTasks();
    // this.getUsers();
  }
  // public getUsers(): void{
  //   this.userService.getUsers().subscribe(
  //     (response: User[]) => {
  //       this.users = response;
  //     }
  //   )
  // }

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
