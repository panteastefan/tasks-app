import {Component, Input, OnInit} from '@angular/core';
import {Status} from "../../models/status";
import {User} from "../../models/user";
import {Task} from "../../models/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() users: User[];
  @Input() task: any;

  keys = Object.keys(Status);
  statusValues = this.keys.map(k => Status[k as Status]);

  constructor() {
  }

  public setTask(): void{
    if (this.task == null){
      this.task = {
        'name': '',
        'description': '',
        'dueDate': '',
        'status': '',
        'user': ''
      }
    }
  }

  ngOnInit(): void {
    this.setTask();
  }
}
