import { Injectable } from '@angular/core';
import { Product } from '../../Interfaces/product';
import { Wishlist } from '../../Interfaces/wishlist';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService/auth.service';
import { User } from 'src/app/Interfaces/user';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  loggedUser:any;
  displayWishMessage=new BehaviorSubject(false);
  constructor(private __Router:Router,private __AuthService:AuthService) {
     this.__AuthService.user.subscribe({
      next:()=>{
              this.loggedUser=this.__AuthService.user.getValue();
              if(!this.loggedUser)  this.__Router.navigate(['/auth/login']);
      }
    })
   }
   
  getDefaultWishlist(){
            return this.loggedUser.wishlist.find((wish:Wishlist) => wish.default); 
  }
  getWishlistById(id:number){
        return this.loggedUser.wishlist.find((wish:Wishlist) => wish.id==id); 
  }
  addToWishList(product:Product){
     const defaultWishlist=this.getDefaultWishlist();
     if(defaultWishlist)
         defaultWishlist.products.push(product);
         this.updateWishList(defaultWishlist);
     }
   deleteFromWishlist(product:Product){
         if(product.WishlistId){
                 const wishlist=this.getWishlistById(product.WishlistId);
                  let productIndex:number=-1;
                  wishlist.products.forEach((prod:Product,index:number) => {if(prod.id === product.id) productIndex=index;});
                  wishlist.products.splice(productIndex,1);
                  this.updateWishList(wishlist);
         }
          
    }

   updateWishList(wishlist:Wishlist){
       this.displayWishMessage.next(true);
       const wishlistIndex=this.loggedUser.wishlist.indexOf(wishlist);
            this.loggedUser.wishlist.splice(wishlistIndex,1,wishlist);
            this.saveToLocalStorage();

   }   
    saveToLocalStorage(){
      let users=localStorage.getItem('users');
      if(users){
          let localUsers=JSON.parse(users);
          let userIndex:number=-1;
          localUsers.forEach((user:User,index:number) => {if(user.id === this.loggedUser.id) userIndex=index;});
            this.__AuthService.user.next(this.loggedUser);
            localStorage.setItem('user',JSON.stringify(this.loggedUser));
            localUsers[userIndex]=this.loggedUser;
            localStorage.setItem('users',JSON.stringify(localUsers));
      }
    }
}
