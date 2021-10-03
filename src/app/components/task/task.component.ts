import {Component, Input, OnInit} from '@angular/core';
import {Status} from "../../services/tasks/status";
import {User} from "../../services/users/user";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() users: Set<User>;

  keys = Object.keys(Status);
  statusValues = this.keys.map(k => Status[k as Status]);

  constructor() {
  }

  ngOnInit(): void {
  }

}
