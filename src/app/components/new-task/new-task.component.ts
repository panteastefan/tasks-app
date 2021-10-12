import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {Task} from "../../models/task";
import {TasksService} from "../../services/tasks/tasks.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ComponentType} from "../../models/component-type";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() users: User[];
  @Input() task: Task;
  addedTask: Task;
  componentType: ComponentType = ComponentType.NEW;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(
      (response: Task) => {
        this.addedTask = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  );
  }
}
