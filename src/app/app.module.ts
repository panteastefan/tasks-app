import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UserTasksTableComponent } from './components/user-tasks-table/user-tasks-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TabsModule} from "ngx-bootstrap/tabs";
import { SearchComponent } from './components/search/search.component';
import { TaskComponent } from './components/task/task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { EditTaskModalComponent } from './components/edit-task-modal/edit-task-modal.component';
import {ModalModule} from "ngb-modal";

@NgModule({
  declarations: [
    AppComponent,
    UserTasksTableComponent,
    SearchComponent,
    TaskComponent,
    LoginPageComponent,
    TasksPageComponent,
    NewTaskComponent,
    EditTaskModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
