import { Injectable } from '@angular/core';
import { Review } from '../../Interfaces/review';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  reviews:Review[]=[
    { id:1,rate:3,title:'string',Message:'string',productId:1,userId:1,date:new Date()}
  ]
  constructor() { }
}
