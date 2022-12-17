import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { CompareComponent } from './compare/compare.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    ShopComponent,
    ProductComponent,
    CompareComponent,
    CheckoutComponent,
    WishlistComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
