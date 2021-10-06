import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public getUsers(): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiServerUrl}/users/all`,
      {userToken: this.cookieService.get("lgnck")});
  }
}
