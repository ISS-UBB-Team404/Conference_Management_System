import { Component, OnInit } from '@angular/core';
import {Conference} from '../conference';
import {ConferenceService} from '../conference.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {

  conferences: Conference[];

  constructor(public conferenceService: ConferenceService,
              private router: Router) { }

  ngOnInit(): void {
    this.conferenceService.getAllConferences()
      .subscribe(conferences => this.conferences = conferences);
    console.log(this.conferences);
  }

  updateConference(conference: Conference): void {
    this.conferenceService.setCurrentConference(conference);
    this.router.navigate(['/chair-update-conference']);
  }
}
