import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.loginForm.value.username, this.loginForm.value.password);
  }
}
