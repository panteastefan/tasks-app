import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Status} from "../../models/status";
import {User} from "../../models/user";
import {FormBuilder, FormControl} from "@angular/forms";
import {Task} from "../../models/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() users!: User[];
  @Input() task!: Task;
  newTask: Task;
  new: boolean;
  @Output() taskOutputEvent = new EventEmitter<Task>();
  taskForm = this.formBuilder.group({
    id: '',
    name: '',
    description: '',
    dueDate: new Date(Date.now()),
    username: '',
    status: Status.NEW
    // name: this.task.name,
    // description: this.task.description,
    // dueDate: this.task.dueDate,
    // username: this.task.username,
    // status: this.task.status
  });

  keys = Object.keys(Status);
  statusValues = this.keys.map(k => Status[k as Status]);

  constructor(private formBuilder: FormBuilder) {
  }

  submit(): void{
    console.log("submit from task");
    // this.newTask = new Task(this.taskForm.value.name, this.taskForm.value.description,
    //   this.taskForm.value.dueDate, this.taskForm.value.status,
    //   this.taskForm.value.username)
    this.newTask = new Task(this.taskForm.value.id, this.taskForm.value.name, this.taskForm.value.description,
      this.taskForm.value.dueDate, this.taskForm.value.status,
      this.taskForm.value.username)
    console.log(this.newTask);
    this.taskOutputEvent.emit(this.newTask);
  }

  ngOnInit(): void {
    console.log("task comp, task: ", this.task);
    this.taskForm.patchValue({
      id: this.task.id,
      name: this.task.name,
      description: this.task.description,
      dueDate: this.task.dueDate,
      username: this.task.username,
      status: this.task.status
  });
  }
}
