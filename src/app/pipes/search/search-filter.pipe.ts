import { Pipe, PipeTransform } from '@angular/core';
import {Task} from "../../models/task";

@Pipe({ name: 'appFilter' })
export class SearchFilterPipe implements PipeTransform {
  transform(tasks: Task[], taskFilter: Task): any[] {
    if (!tasks) {
      return [];
    }
    if (!taskFilter) {
      return tasks;
    }
    const name = taskFilter.name.toLocaleLowerCase();
    const description = taskFilter.description.toLocaleLowerCase();
    const dueDate = new Date(taskFilter.dueDate);
    const username = taskFilter.username.toLocaleLowerCase();
    const status = taskFilter.status;


    return tasks.filter(task => {
      return task.name.toLocaleLowerCase().includes(name) &&
            task.description.toLocaleLowerCase().includes(description) &&
            task.username.toLocaleLowerCase().includes(username) &&
            new Date(task.dueDate) > dueDate &&
            task.status == status;
    });
  }
}
