import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class CookieController{

  constructor(
    private cookieService: CookieService
  ) { }

  setCookie(key: string, value: string): void{
    this.cookieService.put(key, value);
  }

  getCookie(key: string): string{
    return this.cookieService.get(key);
  }
}
