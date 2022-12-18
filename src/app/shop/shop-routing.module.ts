import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { CompareComponent } from './compare/compare.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:ShopComponent,title:'Shop'},
  {path:'product' ,redirectTo:'product/1'},
  {path:'product/:id',component:ProductComponent,title:'Product'},
  {path:'bestSeller',component:ProductsComponent,title:'Best Seller'},
   {path:'trending',component:ProductsComponent,title:'Trending'},
  {path:'newProducts',component:ProductsComponent,title:'New In'},
  {path:'categories', redirectTo:''},
  {path:'categories/:id/:category',component:ProductsComponent,title:'Category'},
  {path:'compare',component:CompareComponent,title:'Compare Products'},
  {path:'checkout',component:CheckoutComponent,title:'Checkout'},
  {path:'wishlist',component:WishlistComponent,title:'Wishlist'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
