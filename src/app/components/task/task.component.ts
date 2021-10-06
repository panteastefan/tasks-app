import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Status} from "../../models/status";
import {User} from "../../models/user";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() users!: User[];
  @Input() task!: any;
  @Output() taskOutputEvent = new EventEmitter<Task>();


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
  submit(): void{
    console.log("submit from task");
    this.taskOutputEvent.emit(this.task);
  }

  ngOnInit(): void {
    this.setTask();
  }
}
