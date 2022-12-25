import { Injectable } from '@angular/core';
import { CategoriesService } from '../CategoriesService/categories.service';
import { Product } from 'src/app/Interfaces/product';
import { ReviewService } from '../ReviewService/review.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
       products:Product[]=[];
       staticProducts:Product[]=[
     {
       id: 1,
       imagePath:"/assets/images/teapot/",
       title:'Teapot',
       isTrend:true,
       stock:5,
       sizes:['S','M','L' ,'XL'],
       colors:['#fff','#000','#f00','#ae4','#f84'],
       old:"$43.90",
       reference:'demo_1',
       categoryId:1,      
       rate:0,
       noOfReviews:0,
       discount:10,        
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
     },
     { rate:0,
       noOfReviews:0,
       id: 2,
       imagePath:"/assets/images/table/",
       isTrend:true,
       title:'Miro Dinning Table',
        old:"$83.90",
       categoryId:2,
       stock:5, 
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
     },
     { rate:0,
       id: 3,
       noOfReviews:0,
       isTrend:true,
       imagePath:"/assets/images/Discus/",
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
       imagePath:"/assets/images/TableLamp/",
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
       ,
       title:'discus Floor and Table',
       old:"$199.90",
       stock:0,
       categoryId:4,
     },
     {
        imagePath:"/assets/images/chairs/",
        noOfReviews:0,
       rate:0,
       id: 9,
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       isTrend:true,
       title:'American Chair',
       isNew:true,
       old:"$55.90",discount:0,
       stock:3,
       categoryId:1,

     },
      {
       imagePath:"/assets/images/teapot/",
       noOfReviews:0,
       rate:0,
       id: 5,
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       isTrend:true,
       title:'Teapot',
       isNew:true,
       old:"$43.90",
       discount:50,
       stock:0,
       categoryId:1,
     },
     {
       imagePath:"/assets/images/table/",
       noOfReviews:0,
       rate:0,
       stock:4,
       id: 6,
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       isNew:false,
       title:'Miro Dinning Table',
       old:"$83.90",
       discount:20,
       categoryId:2,       
     },
     {
       imagePath:"/assets/images/TableLamp/",
       noOfReviews:0,
       rate:0,
       id: 7,
       isNew:true,
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       title:'Janus Table Lamp',
       old:"$73.90",
       stock:3,
       categoryId:3,

     },
     {
       imagePath:"/assets/images/Discus/",
       noOfReviews:0,
       rate:0,
       id: 8,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       title:'discus Floor and Table',
       old:"$199.90",
       discount:40,              
       stock:5,
       categoryId:4,

     },
        ];
  constructor(private __CategoriesService:CategoriesService,private __ReviewService:ReviewService) {
       const prod=localStorage.getItem('products');
       this.products=prod ? JSON.parse(prod) : this.staticProducts;
       this.products.forEach((product:Product) => { 
       product['category']=this.__CategoriesService.getCategoryById(product.categoryId)?.name;
       product['noOfReviews']=this.__ReviewService.getReviewByProductID(product.id).length;
       product['rate']=this.__ReviewService.getRateByProduct(product.id);
                     });
       localStorage.setItem('products',JSON.stringify(this.products));
              }
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
