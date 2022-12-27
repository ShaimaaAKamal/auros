import { Component, Input } from '@angular/core';
import { ReviewService } from 'src/app/Services/ReviewService/review.service';
import { Review } from 'src/app/Interfaces/review';
@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent {
@Input() productReviews:Review[];
@Input() review:Review;
rates:number[]=[1,2,3,4,5];
constructor(private __ReviewService:ReviewService){}
rateReview(id:number,reviewKey:string){
  const review=this.__ReviewService.getReviewById(id);
  if(review)
{  const updatedReviews=(reviewKey === 'yes')?
      this.__ReviewService.updateReviewById(id,'useful',review['useful']+1):
      this.__ReviewService.updateReviewById(id,'unuseful',review['unuseful']+1);
       this.productReviews=updatedReviews;
}
}
}
