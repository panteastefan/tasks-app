import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {RegisterService} from "../../services/users/register/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm = this.formBuilder.group({
    username: '',
    password: '',
    name: '',

  });

  constructor(private formBuilder: FormBuilder,
              private registerService: RegisterService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.registerService.register(this.registerForm.value.username,
                                  this.registerForm.value.password,
                                  this.registerForm.value.name).subscribe(
      (response: any) => {
        if (response != null){
          this.router.navigateByUrl("/");
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  moveToLogin() {
    this.router.navigateByUrl("/");
  }
}
