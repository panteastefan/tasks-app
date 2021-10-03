import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserTasksTableComponent } from './components/user-tasks-table/user-tasks-table.component';
import { TaskElementComponent } from './components/task-element/task-element.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TabsModule} from "ngx-bootstrap/tabs";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserTasksTableComponent,
    TaskElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
