import { Component, Input } from '@angular/core';
import { Product } from '../../../Interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/app/Services/ProductService/products.service';
@Component({
  selector: 'app-also-like-products',
  templateUrl: './also-like-products.component.html',
  styleUrls: ['./also-like-products.component.scss']
})
export class AlsoLikeProductsComponent {
@Input() product:Product;
customOptions: OwlOptions = {
    margin:16,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav:false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
  }
products:Product[]=[]
constructor(private __ProductsService:ProductsService){
}
ngOnInit(): void {
  this.products=this.__ProductsService.getProductsByCategory(this.product);
}
}
