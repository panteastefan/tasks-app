import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {TasksPageComponent} from "./pages/tasks-page/tasks-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {AuthGuardService} from "./services/guard/auth-guard.service";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'tasks', component: TasksPageComponent, canActivate: [AuthGuardService]},
  { path: '**', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
