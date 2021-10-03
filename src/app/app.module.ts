import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UserTasksTableComponent } from './components/user-tasks-table/user-tasks-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TabsModule} from "ngx-bootstrap/tabs";

@NgModule({
  declarations: [
    AppComponent,
    UserTasksTableComponent,
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
