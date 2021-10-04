import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UsersService} from "../../services/users/users.service";
import {Status} from "../../models/status";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public task: any;
  public users!: User[];
  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.setTask();
  }
  private setTask(): void{
    // this is just for test. it's gonna be used on EditTask
    this.task = {
      'name': 'Task name',
      'description': 'Task description',
      'dueDate': '22/10/2021',
      'status': Status.DONE,
      'user': {
        'name': "Stefan"
      }
    }
    this.task = null;
    // this.task = {
    //   'name': '',
    //   'description': '',
    //   'dueDate': '',
    //   'status': '',
    //   'user': ''
    // }
  }
  public getUsers(): void{
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      }
    )
  }
}
