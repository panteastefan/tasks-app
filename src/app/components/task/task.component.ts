import {Component, Input, OnInit} from '@angular/core';
import {Status} from "../../services/tasks/status";
import {User} from "../../services/users/user";
import {UsersService} from "../../services/users/users.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public users!: User[];
  @Input() task: Task;

  keys = Object.keys(Status);
  statusValues = this.keys.map(k => Status[k as Status]);

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }
  public getUsers(): void{
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      }
    )
  }

}
