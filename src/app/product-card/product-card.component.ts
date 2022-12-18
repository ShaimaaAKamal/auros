import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
@Input('product') product:any;
   addToCart(){
  }
  addToWishlist(event:any,id:number){
    event.target.classList.toggle('iconColor');
  }
  addToCompare(event:any,id:number){
        event.target.classList.toggle('iconColor');
  }
}
