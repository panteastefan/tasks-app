import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../models/task";
import {HttpErrorResponse} from "@angular/common/http";
import {TasksService} from "../../services/tasks/tasks.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent implements OnInit {

  @Input() task: Task;
  @Input() users: User[];
  editedTask: Task;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

  editTask(task: Task): void {
    console.log("edit task:", task);
    // this.taskService.addTask(task).subscribe(
    //   (response: Task) => {
    //     this.editedTask = response;
    //     console.log("Added task: ", this.editedTask);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
  }
}
