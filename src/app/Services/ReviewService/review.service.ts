import { Injectable } from '@angular/core';
import { Review } from '../../Interfaces/review';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  reviews:Review[]=[];
  staticReviews:Review[]=[
    { id:1,rate:3,title:'review 1',Message:'this is the first review message',productId:1,userId:1,date:new Date().toLocaleDateString(),useful:0,unuseful:0},
    { id:2,rate:4,title:'review 2',Message:'this is the an review message',productId:1,userId:2,date:new Date().toLocaleDateString(),useful:0,unuseful:0},
    { id:3,rate:3,title:'review 3',Message:'this is the second review message',productId:2,userId:3,date:new Date().toLocaleDateString(),useful:0,unuseful:0},
    { id:4,rate:2,title:'review 4',Message:'this is the third review message',productId:2,userId:1,date:new Date().toLocaleDateString(),useful:0,unuseful:0},
    { id:5,rate:5,title:'review 5',Message:'this is the forth review message',productId:1,userId:2,date:new Date().toLocaleDateString(),useful:0,unuseful:0},
    { id:6,rate:1,title:'review 6',Message:'this is the fifth review message',productId:3,userId:1,date:new Date().toLocaleDateString(),useful:0,unuseful:0},
    { id:7,rate:0,title:'review 7',Message:'this is the sixth review message',productId:3,userId:2,date:new Date().toLocaleDateString(),useful:0,unuseful:0},
    { id:8,rate:2,title:'review 8',Message:'this is the seneth review message',productId:2,userId:3,date:new Date().toLocaleDateString(),useful:0,unuseful:0},

  ]
  constructor() { 
    const reviews=localStorage.getItem('reviews');
    this.reviews=reviews ? JSON.parse(reviews) : this.staticReviews;
    localStorage.setItem('reviews',JSON.stringify(this.reviews));
  }

  getReviewByProductID(id:number){
    return this.reviews.filter((review:Review) => review.productId === id);
  }
   getReviewByUserID(id:string){
    return this.reviews.filter((review:Review) => review.userId === parseInt(id));
  }
  getRateByProduct(id:number){
     const reviews:Review[]=this.getReviewByProductID(id);
     if(reviews.length <=0 ) return 0;
     else{
      let sum:number=0;
      reviews.forEach(review => sum+=review.rate);
      return Math.round(sum/reviews.length);
     }
  }
  addNewReview(newReview:Review){
        this.reviews.push(newReview);
        localStorage.setItem('reviews',JSON.stringify(this.reviews));
  }
  deleteReview(reviewId:number){
    this.reviews.splice(reviewId,1);
    localStorage.setItem('reviews',JSON.stringify(this.reviews));
  }
  getReviewById(reviewId:number){
         return this.reviews.find((review:Review) => review.id === reviewId);
  }
  updateReviewById(reviewId:number,key:string,newValue:any):Review[]{
         let reviewItem:any=this.reviews.find((review:Review) => review.id === reviewId);
         if(reviewItem) {
          reviewItem[key]=newValue;
          this.reviews.splice(reviewId,1,reviewItem);
          localStorage.setItem('reviews',JSON.stringify(this.reviews));
         }
          return this.reviews;
  }
}
