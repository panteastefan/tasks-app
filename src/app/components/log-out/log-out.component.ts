import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LogoutService} from "../../services/users/logout/logout.service";

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private router: Router,
              private logoutService: LogoutService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.logoutService.logout().subscribe(
      (response: any) => {
        console.log(response);
        if(response != null){
          this.logoutService.updateCookie(response);
          this.router.navigateByUrl("/");
        }
      }
    );
  }
}
