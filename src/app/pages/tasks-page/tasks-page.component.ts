import { Component, OnInit } from '@angular/core';
import {Task} from "../../models/task";
import {TasksService} from "../../services/tasks/tasks.service";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../../models/user";
import {UsersService} from "../../services/users/users.service";
import {Status} from "../../models/status";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {
  public task: any;
  public users!: User[];
  public tasks!: Task[];
  constructor(private taskService: TasksService,
              private userService: UsersService) { }

  ngOnInit(): void {
    this.getUserTasks();
    this.getUsers();
    this.setTask();
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
    // this is just for test. it's gonna be used on EditTask
    // this.task = {
    //   'name': 'Task name',
    //   'description': 'Task description',
    //   'dueDate': '22/10/2021',
    //   'status': Status.DONE,
    //   'user': {
    //     'name': "Stefan"
    //   }
    // }
    // this.task = null;
    this.task = {
      'name': '',
      'description': '',
      'dueDate': '',
      'status': '',
      'user': ''
    }
  }
  public getUsers(): void{
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      }
    )
  }
}
