import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { CompareComponent } from './compare/compare.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:ShopComponent,title:'Shop'},
  {path:'product/:id',component:ProductComponent,title:'Product'},
  {path:'compare',component:CompareComponent,title:'Compare Products'},
  {path:'checkout',component:CheckoutComponent,title:'Checkout'},
  {path:'wishlist',component:WishlistComponent,title:'Wishlist'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
