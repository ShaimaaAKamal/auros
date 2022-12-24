import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {
@Input() product:any;
@Input() writeReview:any;
quantity:number=1;
productImages=[1,2,3,4,5]
qunatityIncreament(){
     this.quantity=this.quantity+1;
}
qunatitydecreament(){
  this.quantity=this.quantity <=0 ? 0 : this.quantity-1;
}
   addToCart(){
  }
  addToWishlist(event:any,id:number){
  }
  addToCompare(event:any,id:number){
  }
}
