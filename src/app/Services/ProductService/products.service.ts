import { Injectable } from '@angular/core';
import { CategoriesService } from '../CategoriesService/categories.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private __CategoriesService:CategoriesService) {
     this.products.forEach(product => product['category']=this.__CategoriesService.getCategoryById(product.categoryId).name)
   }
  products:any[]=[
     {
       id: 1,
       src:"/assets/images/trending/teapot/hummingbird-printed-t-shirt.jpg",
      //  srcHover:"/assets/images/trending/teapot/hummingbird-printed-t-shirt3.jpg",
      //  srcSmall:"/assets/images/newProducts/teapot.jpg",
       imagePath:"/assets/images/teapot/",
       alt:'Side 1',
       title:'Teapot',
       productId:1,
       isTrend:true,
       stock:5,
       sizes:['S','M','L' ,'XL'],
       colors:['#fff','#000','#f00','#ae4','#f84'],
       old:"$43.90",new:'$21.90',
       reference:'demo_1',
       categoryId:1,      
       rate:3,
       noOfReviews:4,
       discount:10,        
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
     },
     {
       id: 2,
              isTrend:true,
       imagePath:"/assets/images/teapot/",
       src:"/assets/images/trending/table/brown-bear-printed-sweater2.jpg",
      //  srcHover:"/assets/images/trending/table/brown-bear-printed-sweater3.jpg",
       alt:'Side 2',
       title:'Miro Dinning Table',
      productId:2,old:"$83.90",new:'$52.90',
             categoryId:2,
                   desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'

     },
     {
       id: 3,
              isTrend:true,
       imagePath:"/assets/images/teapot/",

       src:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster2.jpg",
      //  srcHover:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster.jpg",
       alt:'Side 3',
       title:'Janus Table Lamp',
       productId:3,
       old:"$73.90",new:'$41.90',
              categoryId:3,
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
     },
     {
       id: 4,
              isTrend:true,
       imagePath:"/assets/images/teapot/",

             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
       ,src:"/assets/images/trending/Discus/the-adventure-begins-framed-poster.jpg",
      //  srcHover:"/assets/images/trending/Discus/the-adventure-begins-framed-poster2.jpg",
       alt:'Side 4',
       title:'discus Floor and Table',
       productId:4,
       old:"$199.90",new:'$150.90',
       stock:0,
       categoryId:4,
     },
      {
               imagePath:"/assets/images/teapot/",

       id: 5,
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       src:"/assets/images/trending/teapot/hummingbird-printed-t-shirt.jpg",
      //  srcHover:"/assets/images/trending/teapot/hummingbird-printed-t-shirt3.jpg",
       srcSmall:"/assets/images/newProducts/teapot.jpg",
              isTrend:true,

       alt:'Side 1',
       title:'Teapot',
       productId:1,
       isNew:true,
       old:"$43.90",discount:50,
              stock:0,
                     categoryId:1,

     },
     {
             imagePath:"/assets/images/teapot/",

      stock:4,
       id: 6,
       src:"/assets/images/trending/table/brown-bear-printed-sweater2.jpg",
      //  srcHover:"/assets/images/trending/table/brown-bear-printed-sweater3.jpg",
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       alt:'Side 2',
       isNew:false,
       title:'Miro Dinning Table',
      productId:2,old:"$83.90",discount:20,
             categoryId:2,

     },
     {
             imagePath:"/assets/images/teapot/",
       id: 7,
       src:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster2.jpg",
      //  srcHover:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster.jpg",
      //   srcSmall:"/assets/images/newProducts/teapot.jpg",
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
             imagePath:"/assets/images/teapot/",
       id: 8,
       src:"/assets/images/trending/Discus/the-adventure-begins-framed-poster.jpg",
      //  srcHover:"/assets/images/trending/Discus/the-adventure-begins-framed-poster2.jpg",
       alt:'Side 4',
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       title:'discus Floor and Table',
       productId:4,
       old:"$199.90",discount:40,
                     stock:5,       categoryId:4,

     },
   ];
   
   getNewProducts(){
    return this.products.filter(product => product.isNew)
   }

    getTrendingProducts(){
    return this.products.filter(product => product.isTrend)
   }

   getAllProducts(){
    return this.products;
   }

    getProductById(id:string){
    return this.products.find(product => product.id===parseInt(id));
   }

}
