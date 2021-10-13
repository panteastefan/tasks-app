import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../models/task";
import {HttpErrorResponse} from "@angular/common/http";
import {TasksService} from "../../services/tasks/tasks.service";
import {User} from "../../models/user";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ComponentType} from "../../models/component-type";
import {TasksTableControlService} from "../../services/tasks-table-control/tasks-table-control.service";

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent implements OnInit {
  componentType: ComponentType = ComponentType.EDIT;
  @Input() modalRef: NgbModalRef;
  @Input() task: Task;
  @Input() users: User[];
  @Output() modalOutputEvent = new EventEmitter<NgbModalRef>();
  updatedTask: Task;

  constructor(private taskService: TasksService,
              private tasksTableService: TasksTableControlService) { }

  ngOnInit(): void {
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task).subscribe(
      (response: Task) => {
        this.updatedTask = response;
        this.tasksTableService.eventUpdateUserTasks();
        this.tasksTableService.eventUpdateTasks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // emitted from taskComponent - close button
  closeModal(): void{
    this.modalOutputEvent.emit();
  }
}
