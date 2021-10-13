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
import {TasksTableControlService} from "../../services/tasks-table-control/tasks-table-control.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit, OnChanges {
  @Input() users!: User[];
  // task that is showed as form input
  @Input() task!: Task;
  // Edit / New / Search
  @Input() componentType: ComponentType = ComponentType.NONE;
  // submits task for edit/new task
  @Output() taskSubmitEvent = new EventEmitter<Task>();
  @Output() taskSearchEvent = new EventEmitter<Task>();
  @Output("resetSearchFilters") resetFilters: EventEmitter<Task> = new EventEmitter<Task>();
  @Output("closeModal") clsModal: EventEmitter<any> = new EventEmitter();

  ComponentType = ComponentType;
  confirmTask: Task;
  taskSearchFilters: Task;

  // keys of the enum Status
  keys = Object.keys(Status);
  // values of the enum Status
  statusValues = this.keys.map(k => Status[k as Status]);

  taskForm = this.formBuilder.group({
    id: '',
    name: '',
    description: '',
    dueDate: '',
    username: '',
    status: Status.NEW
  });

  constructor(private formBuilder: FormBuilder,
              private tasksTableService: TasksTableControlService) {
  }

  // gets the task input values and returns the Task
  getTaskFromForm(): Task {
    return new Task(this.taskForm.value.id,
      this.taskForm.value.name,
      this.taskForm.value.description,
      this.taskForm.value.dueDate,
      this.taskForm.value.status,
      this.taskForm.value.username)
  }

  // search button
  taskSearchSubmit(): void {
    this.taskSearchFilters = this.getTaskFromForm()
    // emits to searchComponent to update tasks
    this.taskSearchEvent.emit(this.taskSearchFilters);
  }
  // reset button
  resetSearchFilter() {
    this.task = new Task(0, '', '',
      new Date(Date.now()).toISOString().substring(0, 10), Status.NEW, '');
    this.updateForm()
    // emits to searchComponent to update tasks
    this.resetFilters.emit(this.task);
  }

  // add or edit task -- form confirm button
  submitTask(): void {
    this.confirmTask = this.getTaskFromForm();
    this.taskSubmitEvent.emit(this.confirmTask);
  }

  // updates the form inputs with the task updated values
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
    this.taskSearchEvent.emit(this.task);
  }

  // after this.task modifies
  ngOnChanges(changes: SimpleChanges): void {
    // updates the form everytime task gets changed
    this.updateForm()
  }
  // emits to closeModal() from edit Task
  closeModal() {
    this.clsModal.emit();
  }
}
