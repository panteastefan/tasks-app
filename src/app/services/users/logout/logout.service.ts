import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public logout(): Observable<any> {
    return this.http.post<String>(`${this.apiServerUrl}/logout/exit`,
      {userToken: this.cookieService.get("lgnck")});
  }
  public updateCookie(token: string): void{
    this.cookieService.delete('lgnck', token);
  }
}
