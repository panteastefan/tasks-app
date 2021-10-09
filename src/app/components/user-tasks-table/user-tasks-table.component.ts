import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal, NgbModalOptions, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ModalContentComponent} from "ngb-modal";
import {EditTaskModalComponent} from "../edit-task-modal/edit-task-modal.component";
import {User} from "../../models/user";

import {Task} from "../../models/task";

@Component({
  selector: 'app-user-tasks-table',
  templateUrl: './user-tasks-table.component.html',
  styleUrls: ['./user-tasks-table.component.css']
})
export class UserTasksTableComponent implements OnInit {
  ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false
  };
  modalRef: NgbModalRef;
  @Input() tasks: Task[];
  @Input() users: User[];

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {

  }

  editTask(): void{
    console.log("edit task");
  }

  deleteTask(): void{
    console.log("delete task");

  }
  openModal(task: Task) {
    console.log("user-tasks-table", task);
    // this.modalRef = this.modalService.open(EditTaskModalComponent);
    this.modalRef = this.modalService.open(EditTaskModalComponent,
                                            this.ngbModalOptions);
    this.modalRef.componentInstance.task = task;
    this.modalRef.componentInstance.users = this.users;

    this.modalRef.componentInstance.modalOutputEvent.subscribe(() => {this.modalRef.close()});
  }
}
