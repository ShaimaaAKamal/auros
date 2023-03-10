import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { User } from '../../Interfaces/user';
import { Product } from '../../Interfaces/product';
import { ShopInterface } from '../../Interfaces/shop-interface';
import { MainCategoryServiceService } from 'src/app/Services/MainCategoryService/main-category-service.service';
import { AuthService } from 'src/app/Services/AuthService/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{
@ViewChild('collapse') collapse:ElementRef;
@ViewChild('searchMenu') searchMenu:ElementRef;
@ViewChild('userMenu') userMenu:ElementRef;
@ViewChild('userLink') userLink:ElementRef;

closeSearch:boolean=false;
cartItems:number=0;
wishlistNumber:number=0;
compareNumber:number=0;
loggedUser:boolean;
user:User|null;
parseInt=parseInt;
shop:ShopInterface[]=this.__MainCategoryServiceService.getMainCategories();
productTitles:string[]=['Product Name','Product Feature','Product Special']
products:Product[]=[{id:1,src:'../../assets/images/ProductName/hummingbird-printed-t-shirt.jpg',title:'Teatop',old:"$43.90",discount:10,imagePath:'',stock:3,noOfReviews:3,rate:4,categoryId:1},
                    {id:2,src:'../../assets/images/ProductName/brown-bear-printed-sweater.jpg',title:'Miro Dinning Table',old:"$83.90",discount:20,imagePath:'',stock:4,noOfReviews:3,rate:4,categoryId:1},
                    {id:3,src:'../../assets/images/ProductName/the-best-is-yet-to-come-framed-poster.jpg',title:'Janus Table Lamp',old:"$73.90",discount:15,imagePath:'',stock:5,noOfReviews:3,rate:4,categoryId:1}]
constructor(private __MainCategoryServiceService:MainCategoryServiceService,private __AuthService:AuthService){}
ngOnInit(): void {

 this.__AuthService.loggedUser.subscribe({
  next:()=>{this.loggedUser=this.__AuthService.loggedUser.getValue();} 
 });

  this.__AuthService.user.subscribe({
  next:()=>{this.user=this.__AuthService.user.getValue();} 
    })  
}

signOut(){
  this.__AuthService.signOut();
}
 closeMenu(){
  this.collapse.nativeElement.classList.remove('show');
}

handleOpenSearch(){
  this.closeSearch=!this.closeSearch;
  this.searchMenu.nativeElement.classList.toggle('show');
}

handleOpenUser(){
  this.userMenu.nativeElement.classList.toggle('show');
  this.userLink.nativeElement.classList.toggle('textSite');
}

}
