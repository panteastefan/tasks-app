import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UsersService} from "../../services/users/users.service";
import {Status} from "../../models/status";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() users: User[];
  @Input() task: any;
  constructor() {
  }

  ngOnInit(): void {
  }
}
