import { Component, Input, ViewChild } from '@angular/core';
import { Product } from '../../../Interfaces/product';
import { AuthService } from 'src/app/Services/AuthService/auth.service';
import { User } from '../../../Interfaces/user';
import { WishlistService } from 'src/app/Services/WishlistServices/wishlist.service';
import { ProductsService } from 'src/app/Services/ProductService/products.service';
@Component({
  selector: 'app-view-wishlist',
  templateUrl: './view-wishlist.component.html',
  styleUrls: ['./view-wishlist.component.scss']
})
export class ViewWishlistComponent {
@Input() products:Product[];
@Input() wishlistIndex:number;
loggedUser:User|undefined;
displayList:boolean=false;
clickedId:number;
constructor(private __AuthService:AuthService,private __WishlistService:WishlistService,private __ProductsService:ProductsService){
  this.__AuthService.user.subscribe({
    next:()=> this.loggedUser=this.__AuthService.user.getValue()
  })
}

removeFromWishlist(product:Product){
    this.__WishlistService.deleteFromWishlist(product);
    product.addedToWishList=false;
    this.__ProductsService.updateProductById(product.id,product);
}
handleSelectChange(event:any,product:Product){
  const wishlistId=event.target.value;
  this.__WishlistService.deleteFromWishlist(product);
  const newWishlist=this.__WishlistService.getWishlistById(wishlistId);
     if(newWishlist)
         {newWishlist.products.push(product);
         this.__WishlistService.updateWishList(newWishlist);
         product.WishlistId=wishlistId;
         this.__ProductsService.updateProductById(product.id,product);
        }
    this.displayList=false;
}
moveToAnotherWishlist(product:Product){
   this.displayList=true;
   this.clickedId=product.id;
}
}
