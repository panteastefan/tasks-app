import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {TasksService} from "../../services/tasks/tasks.service";
import {Task} from "../../models/task";
import {HttpErrorResponse} from "@angular/common/http";
import {SearchFilterPipe} from "../../pipe/search-filter.pipe";

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
    console.log("task search:", this.taskSearchFilters);
    this.searchFilterPipe.transform(this.tasks, task);
    console.log("task search:", this.tasks);
  }

}
