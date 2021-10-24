import {Component, OnInit} from '@angular/core';
import {Task} from "../../models/task";
import {TasksService} from "../../services/tasks/tasks.service";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../../models/user";
import {UsersService} from "../../services/users/users.service";
import {Status} from "../../models/status";
import {TasksTableControlService} from "../../services/tasks-table-control/tasks-table-control.service";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {
  public task: Task;
  public users!: User[];
  public tasks!: Task[];

  constructor(private taskService: TasksService,
              private userService: UsersService,
              private tasksTableService: TasksTableControlService) { }

  ngOnInit(): void {
      this.getUserTasks();
      this.getUsers();
      this.setTask();
      this.tasksTableService.updateUserTasksEvent$.subscribe(
        (_) => {
          this.getUserTasks();
        }
      );
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

  private setTask(): void{
  this.task = new Task(0, '', '', new Date(Date.now()).toISOString().substring(0, 10),
    Status.NEW, '');
  }

  public getUsers(): void{
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
