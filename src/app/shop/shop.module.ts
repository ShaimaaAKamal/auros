import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { CompareComponent } from './compare/compare.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { FilterComponentComponent } from './filter-component/filter-component.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { SideHeaderComponent } from './side-header/side-header.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductComponent,
    CompareComponent,
    CheckoutComponent,
    WishlistComponent,
    ProductsComponent,
    FilterComponentComponent,
    NewProductsComponent,
    SideHeaderComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ],
})
export class ShopModule { }
