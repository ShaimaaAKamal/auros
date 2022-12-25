import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ProductsService } from 'src/app/Services/ProductService/products.service';
import { Path } from 'src/app/Interfaces/path';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  @ViewChild('arrowFilterIcon') arrowFilterIcon:ElementRef;
  @ViewChild('filterIcon') filterIcon:ElementRef;
  @Input('closeFilterMenu') closeFilterMenu:boolean
  moveFilterMenu:boolean=false;
  clicked:boolean=false;
  cardDisplayView:string='';
  paths:Path[]=[{title:'Home',url:''},{title:''}];
  mainTitle='Home';
  products:Product[]=this.__ProductsService.getAllProducts();
  allProducts:Product[]=[...this.products];
  displayedProducts:Product[]=[...this.products.sort(this.sortByRevelance)];
  totalProductsNumber:number=this.allProducts.length;
  displayedProductsNumber:number = this.displayedProducts.length> 12 ? 12 : this.displayedProducts.length;
  constructor(private __ProductsService:ProductsService){}
  displayGrid(){
    this.cardDisplayView='';
  }
  displayList(){
    this.cardDisplayView='list';
  }
  getData(event:any){
      const selectionKey=event.target.value;
      switch(selectionKey){
        case "Relevance":  this.displayedProducts=this.products.sort(this.sortByRevelance);break;
        case "new":  this.displayedProducts=this.products.filter(product => product.isNew);break;
        case "nameAscend":  this.displayedProducts=this.products.sort((a,b)=>this.sortByName(a,b,'ascend'));break;
        case "nameDescend":  this.displayedProducts=this.products.sort((a,b)=>this.sortByName(a,b,'dscend'));break;
        case "priceDescend":  this.displayedProducts=this.products.sort((a,b)=>this.sortByPrice(a,b,'dscend'));break;
        case "priceAscend":  this.displayedProducts=this.products.sort((a,b)=>this.sortByPrice(a,b,'ascend'));break;
        case "stock":  this.displayedProducts=this.products.filter(product => product.stock && product.stock > 0);break;
        case "random":  this.displayedProducts=[...this.allProducts];break;
      }
      this.totalProductsNumber=this.displayedProducts.length;
       this.displayedProductsNumber = this.displayedProducts.length> 12 ? 12 : this.displayedProducts.length;

  }

  sortByName(a:Product,b:Product,key:string){
     let titleOne=a.title.toLowerCase();
     let titleTwo=b.title.toLowerCase();
     let returnValue=0;
      if (titleOne < titleTwo) {
       returnValue= (key === 'ascend') ? -1 : 1 ;
      }
      if (titleOne > titleTwo) {
          returnValue= (key === 'ascend') ? 1 : -1 ;
      }
      return returnValue;
    }
  sortByPrice(a:Product,b:Product,key:string){
     let priceOne=parseFloat(a.old.split('$')[1]);
     let priceTwo=parseFloat(b.old.split('$')[1]);
     let returnValue=0;
     if(a.discount && a.discount > 0)
        priceOne*=a.discount / 100;
      if(b.discount && b.discount > 0)
        priceTwo*= b.discount / 100;
      if (priceOne < priceTwo) {
               returnValue= (key === 'ascend') ? -1 : 1 ;
      }
      if (priceOne > priceTwo) {
               returnValue= (key === 'ascend') ? 1 : -1 ;
      }

      return returnValue;
    }

  sortByRevelance(a:Product,b:Product){
     let categoryOne=a.categoryId;
     let categoryTwo=b.categoryId;
      if (categoryOne < categoryTwo) {
        return -1;
      }
      if (categoryOne > categoryTwo) {
        return 1;
      }
      return 0;
    }
  
    handleFilterMenuDisplay(){
      this.filterIcon.nativeElement.classList.toggle('d-none');
      this.arrowFilterIcon.nativeElement.classList.toggle('d-none');
      this.clicked=!this.moveFilterMenu;
      this.moveFilterMenu=!this.moveFilterMenu;
    }
    moveFilterMenuChangedHandler(moveFilterMenu:boolean){
            this.clicked=moveFilterMenu;
            this.moveFilterMenu=moveFilterMenu;
            this.filterIcon.nativeElement.classList.toggle('d-none');
            this.arrowFilterIcon.nativeElement.classList.toggle('d-none');

    }
}



