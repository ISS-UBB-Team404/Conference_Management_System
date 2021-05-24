import {Injectable} from '@angular/core';
import {Review} from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  allReviews: Review[] = [];

  constructor() {
  }

  addReview(review: Review): void {
    this.allReviews.push(review);
  }

  getAllReviews(): Review[] {
    return this.allReviews;
  }
}
