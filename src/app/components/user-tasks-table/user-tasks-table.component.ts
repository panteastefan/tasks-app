import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-tasks-table',
  templateUrl: './user-tasks-table.component.html',
  styleUrls: ['./user-tasks-table.component.css']
})
export class UserTasksTableComponent implements OnInit {

  @Input() tasks: any;
  constructor() {
  }

  ngOnInit(): void {
  }

  editTask(): void{
    console.log("edit task");
  }

  deleteTask(): void{
    console.log("delete task");
  }
}
