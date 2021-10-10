import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Status} from "../../models/status";
import {User} from "../../models/user";
import {FormBuilder} from "@angular/forms";
import {Task} from "../../models/task";
import {ComponentType} from "../../models/component-type";

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
  @Input() componentType: ComponentType = ComponentType.NONE;
  @Output() taskOutputEvent = new EventEmitter<Task>();
  @Output() taskSearchOutputEvent = new EventEmitter<Task>();

  ComponentType = ComponentType;
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

  getTaskFromForm(): Task {
    return new Task(this.taskForm.value.id,
      this.taskForm.value.name,
      this.taskForm.value.description,
      this.taskForm.value.dueDate,
      this.taskForm.value.status,
      this.taskForm.value.username)
  }

  taskSearchSubmit(): void {
    this.taskSearchFilters = this.getTaskFromForm()
    console.log("submit from task search", this.taskSearchFilters);
    this.taskSearchOutputEvent.emit(this.taskSearchFilters);
  }

  submit(): void {
    console.log("submit from task");
    this.newTask = this.getTaskFromForm()
    console.log(this.newTask);
    this.taskOutputEvent.emit(this.newTask);
  }

  private updateForm(): void {
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
      if(this.componentType == ComponentType.NEW) {
        this.statusValues = [this.statusValues[0]];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateForm()
    this.taskSearchOutputEvent.emit(this.task);
  }
}
