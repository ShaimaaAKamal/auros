import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishlistService } from 'src/app/Services/WishlistServices/wishlist.service';
import { Wishlist } from '../../../Interfaces/wishlist';
import { Path } from '../../../Interfaces/path';
import { AuthService } from '../../../Services/AuthService/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-single-wishlist',
  templateUrl: './single-wishlist.component.html',
  styleUrls: ['./single-wishlist.component.scss']
})
export class SingleWishlistComponent {
wishlistId:string|null=this.__ActivatedRoute.snapshot.paramMap.get('id');
loggedUser:any
wishlist:Wishlist;
otherWishlist:Wishlist[];
paths:Path[];
count:number=0;
i:number=0;
constructor(private __ActivatedRoute:ActivatedRoute,private __WishlistService:WishlistService,private __AuthService:AuthService,private __Router:Router){
   this.__AuthService.user.subscribe({
      next:()=>{
              this.loggedUser=this.__AuthService.user.getValue();
              if(this.loggedUser){
                  this.getWishlistInfo();
                    this.__Router.routeReuseStrategy.shouldReuseRoute = () => {
                            this.getWishlistInfo();
                               return false;
                        }
              }
              else{
                this.__Router.navigate(['/auth/login']);
              }
      }
    })
}

 
 getWishlistInfo(){
                 this.wishlist=this.wishlistId ? this.__WishlistService.getWishlistById(parseInt(this.wishlistId)):undefined;
                 this.paths=[{title:'Home',url:''},{title:'My Account',url:`/auth/profile/${this.loggedUser.id}`},
                 {title:'My Wishlist',url:'/shop/wishlist'},{title:this.wishlist ? this.wishlist.name : ''}];
                 this.count=this.loggedUser.wishlist.length-1;
                 this.otherWishlist=this.wishlist? this.loggedUser.wishlist.filter((wish:Wishlist) => wish.id !== this.wishlist.id) : [];
 }

}


