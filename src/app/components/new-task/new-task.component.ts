import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {Task} from "../../models/task";
import {TasksService} from "../../services/tasks/tasks.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() users: User[];
  @Input() task: any;
  addedTask: Task;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

  addTask(task: Task): void {
    console.log("new task:", task);
    this.taskService.addTask(task).subscribe(
      (response: Task) => {
        this.addedTask = response;
        console.log("Added task: ", this.addedTask);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  );
  }
}
