import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Services/ProductService/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private __ActivatedRoute:ActivatedRoute,private __ProductsService:ProductsService){}
  paths=[{title:'Home',url:''}];
  product:any;
  ngOnInit(): void {
    const productId=this.__ActivatedRoute.snapshot.params['id'];
    const product=this.__ProductsService.getProductById(productId);
    this.product=product;
    this.paths.push({title:product.category, url:`/shop/categories/${product.categoryId}/${product.category.split(' ').join('_')}`});
    this.paths.push({title:product.title,url:`/shop/product/${product.id}`})
  }
}
