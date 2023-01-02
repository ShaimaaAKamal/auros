import { Injectable } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ProductsService } from '../ProductService/products.service';
import { WishlistService } from '../WishlistServices/wishlist.service';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private __ProductsService:ProductsService,private __WishlistService:WishlistService) { }
  
   addToWishlist(event:any,id:number){
    const productItem:Product|undefined=this.__ProductsService.getProductById((id));
    const defaultWishlistId=this.__WishlistService.getDefaultWishlist();
    if(productItem){
       if(!productItem.addedToWishList){
            productItem.WishlistId=defaultWishlistId.id;
            this.__WishlistService.addToWishList(productItem);
      }
      else{
           this.__WishlistService.deleteFromWishlist(productItem); 
            delete productItem.WishlistId;
      }
       productItem.addedToWishList=!productItem.addedToWishList;
       event.target.classList.toggle('iconColor');
       this.__ProductsService.updateProductById(id,productItem);
    
    }
  }
}
