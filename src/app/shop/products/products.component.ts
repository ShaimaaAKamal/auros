import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
@Input('products') products:Product[];
@Input('cardDisplayView') cardDisplayView:string;
}
