import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Status} from "../../models/status";
import {User} from "../../models/user";
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() users!: User[];
  @Input() task!: any;
  @Output() taskOutputEvent = new EventEmitter<Task>();
  taskForm = this.formBuilder.group({
    name: '',
    description: '',
    dueDate: '',
    assignedUser: '',
    status: ''
  });

  keys = Object.keys(Status);
  statusValues = this.keys.map(k => Status[k as Status]);

  constructor(private formBuilder: FormBuilder) {
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
    console.log(this.taskForm.value.name, this.taskForm.value.description,
      this.taskForm.value.dueDate, this.taskForm.value.status,
      this.taskForm.value.assignedUser);
    console.log(this.taskForm);
    this.taskOutputEvent.emit(this.task);
  }

  ngOnInit(): void {
    this.setTask();
  }
}
