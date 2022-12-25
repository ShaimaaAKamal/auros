import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-spex',
  templateUrl: './product-spex.component.html',
  styleUrls: ['./product-spex.component.scss']
})
export class ProductSpexComponent {
@Input() product:any;
}
