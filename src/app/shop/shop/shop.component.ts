import { Component, ElementRef, Input, ViewChild } from '@angular/core';

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
  paths=[{title:'Home',url:''},{title:''}];
  mainTitle='Home';
  products=[
     {
       id: 1,
       src:"/assets/images/trending/teapot/hummingbird-printed-t-shirt.jpg",
       srcHover:"/assets/images/trending/teapot/hummingbird-printed-t-shirt3.jpg",
       alt:'Side 1',
       title:'Teapot',
       productId:1,
       old:"$43.90",new:'$21.90',
       categoryId:1,              
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
     },
     {
       id: 2,
       src:"/assets/images/trending/table/brown-bear-printed-sweater2.jpg",
       srcHover:"/assets/images/trending/table/brown-bear-printed-sweater3.jpg",
       alt:'Side 2',
       title:'Miro Dinning Table',
      productId:2,old:"$83.90",new:'$52.90',
             categoryId:2,
                   desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'

     },
     {
       id: 3,
       src:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster2.jpg",
       srcHover:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster.jpg",
       alt:'Side 3',
       title:'Janus Table Lamp',
       productId:3,
       old:"$73.90",new:'$41.90',
              categoryId:3,
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
     },
     {
       id: 4,
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
       ,src:"/assets/images/trending/Discus/the-adventure-begins-framed-poster.jpg",
       srcHover:"/assets/images/trending/Discus/the-adventure-begins-framed-poster2.jpg",
       alt:'Side 4',
       title:'discus Floor and Table',
       productId:4,
       old:"$199.90",new:'$150.90',
       stock:0,
       categoryId:4,
     },
      {
       id: 5,
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       src:"/assets/images/trending/teapot/hummingbird-printed-t-shirt.jpg",
       srcHover:"/assets/images/trending/teapot/hummingbird-printed-t-shirt3.jpg",
       alt:'Side 1',
       title:'Teapot',
       productId:1,
       isNew:true,
       old:"$43.90",discount:50,
              stock:0,
                     categoryId:1,

     },
     {
      stock:4,
       id: 6,
       src:"/assets/images/trending/table/brown-bear-printed-sweater2.jpg",
       srcHover:"/assets/images/trending/table/brown-bear-printed-sweater3.jpg",
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       alt:'Side 2',
       isNew:false,
       title:'Miro Dinning Table',
      productId:2,old:"$83.90",discount:20,
             categoryId:2,

     },
     {
       id: 7,
       src:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster2.jpg",
       srcHover:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster.jpg",
       alt:'Side 3',
       isNew:true,
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       title:'Janus Table Lamp',
       productId:3,
       old:"$73.90",new:'$41.90',
                     stock:3,
                            categoryId:3,

     },
     {
       id: 8,
       src:"/assets/images/trending/Discus/the-adventure-begins-framed-poster.jpg",
       srcHover:"/assets/images/trending/Discus/the-adventure-begins-framed-poster2.jpg",
       alt:'Side 4',
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       title:'discus Floor and Table',
       productId:4,
       old:"$199.90",discount:40,
                     stock:5,       categoryId:4,

     },
   ];
  allProducts=[...this.products];
  displayedProducts:any[]=[...this.products.sort(this.sortByRevelance)];
  totalProductsNumber:number=this.allProducts.length;
  displayedProductsNumber:number = this.displayedProducts.length> 12 ? 12 : this.displayedProducts.length;
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

  sortByName(a:any,b:any,key:string){
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
  sortByPrice(a:any,b:any,key:string){
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

  sortByRevelance(a:any,b:any){
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



