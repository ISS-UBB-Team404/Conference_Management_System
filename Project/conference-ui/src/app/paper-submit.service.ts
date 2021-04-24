import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Paper} from './paper';

@Injectable({
  providedIn: 'root'
})
export class PaperSubmitService {

  constructor(private http: HttpClient) { }

  public submitPaper(paper: Paper): any {
    alert('Paper submitted!');
    return this.http.post('http://localhost:8080/submit-paper', paper);
  }
}
