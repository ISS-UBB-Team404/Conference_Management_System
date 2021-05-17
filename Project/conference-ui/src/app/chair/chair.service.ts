import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Conference} from '../conference';

@Injectable({
  providedIn: 'root'
})
export class ChairService {

  private chairUrl = 'http://localhost:8080/chair';

  constructor(private http: HttpClient) { }

  public inviteChair(formValue: object): any {
    console.log(formValue);
    // return this.http.post(this.chairUrl + '/invite', email);
  }

  public createSection(section: Section): any{

  }
}
