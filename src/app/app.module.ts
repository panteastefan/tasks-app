import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UserTasksTableComponent } from './components/user-tasks-table/user-tasks-table.component';
import {TabsModule} from "ngx-bootstrap/tabs";
import { SearchComponent } from './components/search/search.component';
import { TaskComponent } from './components/task/task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { EditTaskModalComponent } from './components/edit-task-modal/edit-task-modal.component';
import {ModalModule} from "ngb-modal";
import {SearchFilterPipe} from "./pipes/search/search-filter.pipe";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LogOutPageComponent } from './pages/log-out-page/log-out-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTasksTableComponent,
    SearchComponent,
    TaskComponent,
    LoginPageComponent,
    TasksPageComponent,
    NewTaskComponent,
    EditTaskModalComponent,
    SearchFilterPipe,
    RegisterPageComponent,
    LogOutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [SearchFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
