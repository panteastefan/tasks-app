import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {TasksService} from "../../services/tasks/tasks.service";
import {Task} from "../../models/task";
import {HttpErrorResponse} from "@angular/common/http";
import {SearchFilterPipe} from "../../pipes/search/search-filter.pipe";
import {Status} from "../../models/status";
import {ComponentType} from "../../models/component-type";

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


  constructor(private taskService: TasksService, private searchFilterPipe: SearchFilterPipe) {
  }

  ngOnInit(): void {
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
        console.log("get tasks:", this.tasks);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public taskSearch(task: Task): void{
    this.taskSearchFilters = task;
    this.searchFilterPipe.transform(this.tasks, task);
  }

  public resetSearchFilters(): void{
    this.task = new Task(0, '', '', new Date(Date.now()).toISOString().substring(0, 10), Status.NEW, '');
    this.searchFilterPipe.transform(this.tasks, this.task);
  }
}
