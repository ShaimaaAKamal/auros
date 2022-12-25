import { Injectable } from '@angular/core';
import { CategoriesService } from '../CategoriesService/categories.service';
import { Product } from 'src/app/Interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private __CategoriesService:CategoriesService) {
     this.products.forEach((product:Product) => product['category']=this.__CategoriesService.getCategoryById(product.categoryId)?.name)
   }
  products:Product[]=[
     {
       id: 1,
       src:"/assets/images/trending/teapot/hummingbird-printed-t-shirt.jpg",
      //  srcHover:"/assets/images/trending/teapot/hummingbird-printed-t-shirt3.jpg",
      //  srcSmall:"/assets/images/newProducts/teapot.jpg",
       imagePath:"/assets/images/teapot/",
       title:'Teapot',
       isTrend:true,
       stock:5,
       sizes:['S','M','L' ,'XL'],
       colors:['#fff','#000','#f00','#ae4','#f84'],
       old:"$43.90",
       reference:'demo_1',
       categoryId:1,      
       rate:3,
       noOfReviews:1,
       discount:10,        
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
     },
     { rate:0,
       noOfReviews:0,
       id: 2,
              isTrend:true,
       imagePath:"/assets/images/teapot/",
       src:"/assets/images/trending/table/brown-bear-printed-sweater2.jpg",
      //  srcHover:"/assets/images/trending/table/brown-bear-printed-sweater3.jpg",
       title:'Miro Dinning Table',
        old:"$83.90",
             categoryId:2,
              stock:5, 
                   desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
    
     },
     { rate:2,
       id: 3,
              noOfReviews:0,

              isTrend:true,
       imagePath:"/assets/images/teapot/",

       src:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster2.jpg",
      //  srcHover:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster.jpg",
       title:'Janus Table Lamp',
       old:"$73.90",
              categoryId:3,
               stock:5, 
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
     },
     {rate:0,
              noOfReviews:0,

       id: 4,
              isTrend:true,
       imagePath:"/assets/images/teapot/",

             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
       ,src:"/assets/images/trending/Discus/the-adventure-begins-framed-poster.jpg",
      //  srcHover:"/assets/images/trending/Discus/the-adventure-begins-framed-poster2.jpg",
     
       title:'discus Floor and Table',
       old:"$199.90",
       stock:0,
       categoryId:4,
     },
      {
               imagePath:"/assets/images/teapot/",
                      noOfReviews:0,

       rate:1,
       id: 5,
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       src:"/assets/images/trending/teapot/hummingbird-printed-t-shirt.jpg",
      //  srcHover:"/assets/images/trending/teapot/hummingbird-printed-t-shirt3.jpg",
       // srcSmall:"/assets/images/newProducts/teapot.jpg",
              isTrend:true,

     
       title:'Teapot',
   
       isNew:true,
       old:"$43.90",discount:50,
              stock:0,
                     categoryId:1,

     },
     {
             imagePath:"/assets/images/teapot/",
                    noOfReviews:0,

       rate:2,
      stock:4,
       id: 6,
       src:"/assets/images/trending/table/brown-bear-printed-sweater2.jpg",
      //  srcHover:"/assets/images/trending/table/brown-bear-printed-sweater3.jpg",
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       isNew:false,
       title:'Miro Dinning Table',
       old:"$83.90",discount:20,
             categoryId:2,
              

     },
     {
             imagePath:"/assets/images/teapot/",
                    noOfReviews:0,

             rate:3,
       id: 7,
       src:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster2.jpg",
      //  srcHover:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster.jpg",
      //   srcSmall:"/assets/images/newProducts/teapot.jpg",
       isNew:true,
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       title:'Janus Table Lamp',
       old:"$73.90",
                     stock:3,
                            categoryId:3,

     },
     {
             imagePath:"/assets/images/teapot/",
                    noOfReviews:0,

             rate:5,
       id: 8,
       src:"/assets/images/trending/Discus/the-adventure-begins-framed-poster.jpg",
      //  srcHover:"/assets/images/trending/Discus/the-adventure-begins-framed-poster2.jpg",
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       title:'discus Floor and Table',
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
