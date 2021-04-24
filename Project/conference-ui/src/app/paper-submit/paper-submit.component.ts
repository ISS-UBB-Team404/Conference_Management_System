import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PaperSubmitService} from '../paper-submit.service';
import {Router} from '@angular/router';
import {CookieController} from '../CookieController';
import {Paper} from '../paper';


@Component({
  selector: 'app-paper-submit',
  templateUrl: './paper-submit.component.html',
  styleUrls: ['./paper-submit.component.css']
})
export class PaperSubmitComponent implements OnInit {

  submitForm: FormGroup;

  constructor(private paperSubmitService: PaperSubmitService,
              private formBuilder: FormBuilder,
              private router: Router,
              private cookieService: CookieController) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      title: [''],
      content: [''],
    });
  }

  onSubmit(): void {
    const paper: Paper = {
      authorId : Number(this.cookieService.getCookie('userId')),
      title : this.submitForm.value.title,
      content: this.submitForm.value.content
    };

    console.log('Author with id: ' + Number(this.cookieService.getCookie('userId')) + ' submitted the paper!');
    this.paperSubmitService.submitPaper(paper)
      .subscribe(data => {
          console.log('response received');
        },
        error => console.log('exception'));
  }
}
