// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import {Task} from "../models/task";

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

    return tasks.filter(task => {
      return task.name.toLocaleLowerCase().includes(name);
    });
  }
}
