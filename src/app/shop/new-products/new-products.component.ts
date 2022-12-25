import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/ProductService/products.service';
import { Product } from 'src/app/Interfaces/product';
@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent {
 constructor(private __ProductsService:ProductsService){}
 products:Product[]=[];
 parseFloat=parseFloat;
 ngOnInit(): void {
   this.products=this.__ProductsService.getNewProducts();
 }
}
