import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {TasksService} from "../../services/tasks/tasks.service";
import {Task} from "../../models/task";
import {HttpErrorResponse} from "@angular/common/http";
import {SearchFilterPipe} from "../../pipes/search/search-filter.pipe";
import {Status} from "../../models/status";
import {ComponentType} from "../../models/component-type";
import {TasksTableControlService} from "../../services/tasks-table-control/tasks-table-control.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() users: User[];
  @Input() task: Task;
  public tasks!: Task[];
  public taskSearchFilters: Task;
  componentType: ComponentType = ComponentType.SEARCH;


  constructor(private taskService: TasksService,
              private updateTasksTableService: TasksTableControlService) {
  }

  ngOnInit(): void {
    this.getTasks();
    this.updateTasksTableService.updateTasksTableEvent$.subscribe(
      (_) => {
        this.taskSearch(this.task);
      }
    );
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // updates tasks based on task search filters
  // using appFilter pipe
  public taskSearch(task: Task): void{
    this.taskSearchFilters = task;
  }

  // resets search filters and updates tasks in tasks-table
  public resetSearchFilters(task: Task): void{
    this.taskSearchFilters = task;
  }
}
