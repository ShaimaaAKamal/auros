import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ReviewService } from 'src/app/Services/ReviewService/review.service';
import { Review } from 'src/app/Interfaces/review';
@Component({
  selector: 'app-product-spex',
  templateUrl: './product-spex.component.html',
  styleUrls: ['./product-spex.component.scss']
})
export class ProductSpexComponent {
@Input() product:Product;
@Input() writeReview:any;
productReviews:Review[]=[]
constructor(private __ReviewService:ReviewService){}
ngOnInit(): void {
  this.productReviews=this.__ReviewService.getReviewByProductID(this.product.id);
}
}
