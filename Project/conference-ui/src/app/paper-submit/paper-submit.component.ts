import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PaperSubmitService} from '../paper-submit.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-paper-submit',
  templateUrl: './paper-submit.component.html',
  styleUrls: ['./paper-submit.component.css']
})
export class PaperSubmitComponent implements OnInit {

  submitForm: FormGroup;
  public authorId: string;

  constructor(private paperSubmitService: PaperSubmitService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authorId = this.route.snapshot.paramMap.get('id');
    this.submitForm = this.formBuilder.group({
      title: [''],
      content: [''],
      authorId: this.authorId
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
