import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../models/task";
import {HttpErrorResponse} from "@angular/common/http";
import {TasksService} from "../../services/tasks/tasks.service";
import {User} from "../../models/user";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent implements OnInit {
  @Input() modalRef: NgbModalRef;
  @Input() task: Task;
  @Input() users: User[];
  @Output() modalOutputEvent = new EventEmitter<NgbModalRef>();
  updatedTask: Task;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

  updateTask(task: Task): void {
    console.log("update task:", task);
    this.taskService.updateTask(task).subscribe(
      (response: Task) => {
        this.updatedTask = response;
        console.log("updated task: ", this.updatedTask);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  closeModal(): void{
    this.modalOutputEvent.emit();
  }
}
