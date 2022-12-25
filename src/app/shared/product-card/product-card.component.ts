import { Component, Input } from '@angular/core';
import { Product } from '../../Interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input('product') product:Product;
  @Input ('imageWidth') imageWidth:string='';
  @Input ('cardDisplayView') cardDisplayView:string='';
  parseFloat=parseFloat;
   addToCart(){
  }
  addToWishlist(event:any,id:number){
    event.target.classList.toggle('iconColor');
  }
  addToCompare(event:any,id:number){
        event.target.classList.toggle('iconColor');
  }
}
