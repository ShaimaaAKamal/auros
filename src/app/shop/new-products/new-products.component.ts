import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/ProductService/products.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent {
 constructor(private __ProductsService:ProductsService){}
 products:any[]=[];
 ngOnInit(): void {
   this.products=this.__ProductsService.getNewProducts();
 }
}
