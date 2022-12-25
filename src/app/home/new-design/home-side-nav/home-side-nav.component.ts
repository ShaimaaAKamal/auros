import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/ProductService/products.service';
import { Product } from 'src/app/Interfaces/product';
@Component({
  selector: 'app-home-side-nav',
  templateUrl: './home-side-nav.component.html',
  styleUrls: ['./home-side-nav.component.scss']
})
export class HomeSideNavComponent implements OnInit {
categories:boolean[]=[true,false,false,false,false]
 Data:Product[]=[];
ALLData:Product[]=this.__ProductsService.getAllProducts();
  constructor(private __ProductsService:ProductsService){}
  getData(category:string){
     switch(category){
      case 'all': this.Data=this.ALLData; this.categories=this.categories.map((category,index)=> index === 0);break;
      case 'Furnitures': this.Data=this.ALLData.slice(0,2);this.categories=this.categories.map((category,index)=> index === 1);break;
      case 'Chairs': this.Data=this.ALLData.slice(0,3); this.categories=this.categories.map((category,index)=> index === 2); break;
      case 'Lighting': this.Data=this.ALLData.slice(0,2); this.categories=this.categories.map((category,index)=> index === 3); break;
      case 'Decor': this.Data=[]; this.categories=this.categories.map((category,index)=> index === 4); break;
     }
  }
   ngOnInit(): void {
       this.Data=this.ALLData;
   }
   handleFocus(category:string){
       this.getData(category);
   }

}
