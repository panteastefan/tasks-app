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

  statusValues: any;
  @Input() users!: User[];
  @Input() task!: any;
  new: boolean;
  @Output() taskOutputEvent = new EventEmitter<Task>();
  taskForm = this.formBuilder.group({
    name: '',
    description: '',
    dueDate: '',
    username: '',
    status: ''
  });

  keys = Object.keys(Status);

  constructor(private formBuilder: FormBuilder) {
  }

  public setTask(): void{
    if (this.task == null){
      this.task = {
        'name': '',
        'description': '',
        'dueDate': '',
        'status': '',
        'username': ''
      }
    }
    if (this.task.name == ''){
      this.statusValues = this.keys.map(k => Status[k as Status]);
      this.new = false;
    }
    else{
      this.statusValues = [Status.NEW];
      this.new = true;
    }
  }
  submit(): void{
    console.log("submit from task");
    console.log(this.taskForm.value.name, this.taskForm.value.description,
      this.taskForm.value.dueDate, this.taskForm.value.status,
      this.taskForm.value.username);
    console.log(this.taskForm);
    this.taskOutputEvent.emit(this.task);
  }

  ngOnInit(): void {
    this.setTask();
  }
}
