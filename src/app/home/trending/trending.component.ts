import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/app/Services/ProductService/products.service';
import { Product } from 'src/app/Interfaces/product';
@Component({
  selector: 'app-home-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class homeTrendingComponent {
  constructor(private __ProductsService:ProductsService){}
  Trending:Product[]=this.__ProductsService.getTrendingProducts();
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
}
