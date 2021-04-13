import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PaperSubmitService} from '../paper-submit.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-paper-submit',
  templateUrl: './paper-submit.component.html',
  styleUrls: ['./paper-submit.component.css']
})
export class PaperSubmitComponent implements OnInit {

  submitForm: FormGroup;

  constructor(private paperSubmitService: PaperSubmitService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      title: [''],
      content: [''],
    });
  }

  onSubmit(): void {
    this.paperSubmitService.submitPaper(this.submitForm.value)
      .subscribe(data => {
          console.log('response received');
        },
        error => console.log('exception'));
  }
}
