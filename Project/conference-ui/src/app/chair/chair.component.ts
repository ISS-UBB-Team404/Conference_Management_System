import { Component, OnInit } from '@angular/core';
import {Conference} from '../conference';
import {ConferenceService} from '../conference.service';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {

  conferences: Conference[];

  constructor(public conferenceService: ConferenceService) { }

  ngOnInit(): void {
    this.conferenceService.getAllConferences()
      .subscribe(conferences => this.conferences = conferences);
    console.log(this.conferences);
  }

}
