import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
@Component({
  selector: 'app-product-spex',
  templateUrl: './product-spex.component.html',
  styleUrls: ['./product-spex.component.scss']
})
export class ProductSpexComponent {
@Input() product:Product;
@Input() writeReview:any;
}
