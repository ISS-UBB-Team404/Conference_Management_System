import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Paper} from '../../paper';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-review-paper',
  templateUrl: './review-paper.component.html',
  styleUrls: ['./review-paper.component.css']
})
export class ReviewPaperComponent implements OnInit {
  possibleReviewValues: any = ['reject', 'accept'];
  selectedPaper: Paper;
  selectedReviewValue: string;
  gradingForm = this.formBuilder.group({
    grade: ['', [Validators.required]],
    comments: ['']
  });

  constructor(private route: ActivatedRoute,
              public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.selectedPaper = this.route.snapshot.data[`paper`];
  }

  changeSelectedReviewValue(value: any): void {
    console.log(this.possibleReviewValues);
    this.selectedReviewValue = value;
  }

  onSubmit(): void{
    console.log(
      JSON.stringify(this.gradingForm.value)
    );
  }
}
