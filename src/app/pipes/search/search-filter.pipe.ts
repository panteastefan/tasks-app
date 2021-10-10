// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import {Task} from "../../models/task";

@Pipe({ name: 'appFilter' })
export class SearchFilterPipe implements PipeTransform {
  datesAreOnSameDay = (first: Date, second: Date) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

  transform(tasks: Task[], taskFilter: Task): any[] {
    if (!tasks) {
      return [];
    }
    if (!taskFilter) {
      return tasks;
    }
    const name = taskFilter.name.toLocaleLowerCase();
    const description = taskFilter.description.toLocaleLowerCase();
    // const dueDate = taskFilter.dueDate;
    // console.log("due date: ", dueDate)
    const username = taskFilter.username.toLocaleLowerCase();
    const status = taskFilter.status;


    return tasks.filter(task => {
      // console.log(task.dueDate)
      return task.name.toLocaleLowerCase().includes(name) &&
            task.description.toLocaleLowerCase().includes(description) &&
            task.username.toLocaleLowerCase().includes(username) &&
            // this.datesAreOnSameDay(task.dueDate, dueDate) &&
            // task.dueDate.getDate() dueDate &&
            task.status == status;
    });
  }
}
