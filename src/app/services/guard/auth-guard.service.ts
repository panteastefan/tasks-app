import { Injectable } from '@angular/core';
import { Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private cookieService: CookieService, private router: Router) { }
  canActivate(): boolean {
    if (this.cookieService.get('lgnck') == '') {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
