import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, NgbModalOptions, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {EditTaskModalComponent} from "../edit-task-modal/edit-task-modal.component";
import {User} from "../../models/user";
import {Task} from "../../models/task";
import {HttpErrorResponse} from "@angular/common/http";
import {TasksService} from "../../services/tasks/tasks.service";
import {TasksTableControlService} from "../../services/tasks-table-control/tasks-table-control.service";

@Component({
  selector: 'app-user-tasks-table',
  templateUrl: './user-tasks-table.component.html',
  styleUrls: ['./user-tasks-table.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class UserTasksTableComponent implements OnInit {
  ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false,
    size: 'lg',
    modalDialogClass: 'custom-modal'
  };
  modalRef: NgbModalRef;
  deletedTaskId: number;

  @Input() tasks: Task[];
  @Input() users: User[];
  @Input() taskSearch: Task;

  constructor(private modalService: NgbModal,
              private taskService: TasksService,
              private tasksTableService: TasksTableControlService) {
  }

  ngOnInit(): void {
  }

  deleteTask(taskId: number): void {

    this.taskService.deleteTask(taskId).subscribe(
      (response: number) => {
        this.deletedTaskId = response;
        this.tasksTableService.eventUpdateTasks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  openModal(task: Task) {
    this.modalRef = this.modalService.open(EditTaskModalComponent,
                                            this.ngbModalOptions);
    this.modalRef.componentInstance.task = task;
    this.modalRef.componentInstance.users = this.users;

    this.modalRef.componentInstance.modalOutputEvent.subscribe(() => {this.modalRef.close()});
  }
}
