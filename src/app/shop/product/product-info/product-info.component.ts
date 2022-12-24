import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {
@Input() product:any;
@Input() writeReview:any;
productImages=[1,2,3,4,5]
}
