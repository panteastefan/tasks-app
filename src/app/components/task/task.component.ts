import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import {Status} from "../../models/status";
import {User} from "../../models/user";
import {FormBuilder} from "@angular/forms";
import {Task} from "../../models/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit, OnChanges {
  @Input() shouldShowSubmitButton: boolean = true;
  @Input() users!: User[];
  @Input() task!: Task;
  @Input() isSearch: boolean = false;
  @Output() taskOutputEvent = new EventEmitter<Task>();
  @Output() taskSearchOutputEvent = new EventEmitter<Task>();

  newTask: Task;
  taskSearchFilters: Task;
  keys = Object.keys(Status);
  statusValues = this.keys.map(k => Status[k as Status]);

  taskForm = this.formBuilder.group({
    id: '',
    name: '',
    description: '',
    dueDate: new Date(Date.now()),
    username: '',
    status: Status.NEW
  });

  constructor(private formBuilder: FormBuilder) {
  }

  getTaskFromForm(): Task{
    return new Task(this.taskForm.value.id,
      this.taskForm.value.name,
      this.taskForm.value.description,
      this.taskForm.value.dueDate,
      this.taskForm.value.status,
      this.taskForm.value.username)
  }

  taskSearchSubmit(): void{
    this.taskSearchFilters = this.getTaskFromForm()
    console.log("submit from task search", this.taskSearchFilters);
    this.taskSearchOutputEvent.emit(this.taskSearchFilters);
  }

  submit(): void{
    console.log("submit from task");
    this.newTask = this.getTaskFromForm()
    console.log(this.newTask);
    this.taskOutputEvent.emit(this.newTask);
  }

  private updateForm(): void{
    this.taskForm.patchValue({
      id: this.task.id,
      name: this.task.name,
      description: this.task.description,
      dueDate: this.task.dueDate,
      username: this.task.username,
      status: this.task.status
    });
  }

  ngOnInit(): void {
    console.log("task comp, task: ", this.task);
    this.task = new Task(0, '', '', new Date(Date.now()), Status.NEW, '');

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes: ", SimpleChange);
    console.log("task comp on change, task: ", this.task);
    this.updateForm()
    this.taskSearchOutputEvent.emit(this.task);
  }
}
