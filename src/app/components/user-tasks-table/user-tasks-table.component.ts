import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
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
  openModal() {
    const modalRef = this.modalService.open(EditTaskModalComponent);
    modalRef.componentInstance.task = this.tasks[0];
    // this.users = [new User(1, "name", "username")]
    modalRef.componentInstance.users = this.users;

    console.log("user-tasks-table", this.users);
    console.log("user-tasks-table", this.tasks[0]);
  }
}
