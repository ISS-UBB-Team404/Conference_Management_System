import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Conference} from './conference';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private conferenceUrl = 'http://localhost:8080/chair';

  constructor(private http: HttpClient) {
  }

  public getAllConferences(): Observable<Conference[]> {
    return this.http.get<Array<Conference>>(this.conferenceUrl);
  }
}
