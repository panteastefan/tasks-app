import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {TasksPageComponent} from "./pages/tasks-page/tasks-page.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'tasks', component: TasksPageComponent },
  { path: '**', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
