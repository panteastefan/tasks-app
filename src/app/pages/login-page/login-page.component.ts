import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {LoginService} from "../../services/users/login/login.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder, private loginService: LoginService,
              private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.login(this.loginForm.value.username,
      this.loginForm.value.password).subscribe(
      (response: any) => {
        this.cookieService.set("lgnck", response.loginToken);
        this.router.navigateByUrl("/tasks");
        },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  moveToRegister(){
    this.router.navigateByUrl("/register");
  }
}
