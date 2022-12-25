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
import { ProductImagesCarsouelComponent } from './product/product-images-carsouel/product-images-carsouel.component';
import { ProductInfoComponent } from './product/product-info/product-info.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { SizeGuideComponent } from './size-guide/size-guide.component';
import { ProductSpexComponent } from './product/product-spex/product-spex.component';

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
    ProductImagesCarsouelComponent,
    ProductInfoComponent,
    ProductReviewComponent,
    SizeGuideComponent,
    ProductSpexComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ],
})
export class ShopModule { }
