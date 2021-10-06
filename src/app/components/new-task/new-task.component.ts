import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() users: User[];
  @Input() task: any;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(task: Task): void {
    console.log(task);
  }
}
