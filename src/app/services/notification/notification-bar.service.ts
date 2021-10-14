import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationBarService {

  constructor(
    private changeNotification: MatSnackBar) { }

  // notification for modify/add/delete task
  openChangeNotificationBar(message: string, action="Ok") {
    this.changeNotification.open(message, action, {duration: 1500});
  }
}
