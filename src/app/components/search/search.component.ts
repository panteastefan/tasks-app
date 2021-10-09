import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UsersService} from "../../services/users/users.service";
import {Status} from "../../models/status";
import {TasksService} from "../../services/tasks/tasks.service";
import {Task} from "../../models/task";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() users: User[];
  @Input() task: Task;
  public tasks!: Task[];

  constructor(private taskService: TasksService) {
  }

  ngOnInit(): void {
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
        console.log("get tasks:", this.tasks);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
