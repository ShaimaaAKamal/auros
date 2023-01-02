import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from '../../../Interfaces/product';
@Component({
  selector: 'app-singlewishlishproduct',
  templateUrl: './singlewishlishproduct.component.html',
  styleUrls: ['./singlewishlishproduct.component.scss']
})
export class SinglewishlishproductComponent {
@Input() product:Product;
@ViewChild('quantity') quantity:ElementRef;
parseFloat=parseFloat;
addtoCart(){
  const quantity=this.quantity.nativeElement.value;
}

}
