import { Blog } from './../../Interfaces/blog';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-blog-section',
  templateUrl: './home-blog-section.component.html',
  styleUrls: ['./home-blog-section.component.scss']
})
export class HomeBlogSectionComponent {
  blogs:Blog[] = [
     {id:1,title:'Ideas for Winter Home Renovations',category:'Lighting',date:'18 Dec , 2013',description:"Winter is coming! If you're planning on renovating your home this winter, here are some winter home renovation ideas to consider. The post Ideas for Winter Home Renovations appeared first on Furniture Fashion and requires written authorization to be republished on",image:"../../../../assets/images/HomeBlogImages/b-1.jpg"},
     {id:2,title:'Creating a Fun and Functional Home Office',category:'Home Office',date:'18 Jan , 2013',description:"Struggling with feeling productive at home? Learn how to create the perfect home office that’s fun and functional with these ten tips from Furniture Fashion. The post Creating a Fun and Functional Home Office appeared first on Furniture Fashion and requires written",image:"../../../../assets/images/HomeBlogImages/b-2.jpg"},
     {id:3,title:'7 Ways to Add Style to Your Dining Room',category:'Style',date:'18 Dec , 2013',description:"Winter is coming! If you're planning on renovating your home this winter, here are some winter home renovation ideas to consider. The post Ideas for Winter Home Renovations appeared first on Furniture Fashion and requires written authorization to be republished on",image:"../../../../assets/images/HomeBlogImages/b-3.jpg"},
     {id:4,title:'What to Consider When Buying Furniture for the Kids Room',category:'Furnitures',date:'18 Dec , 2013',description:"Winter is coming! If you're planning on renovating your home this winter, here are some winter home renovation ideas to consider. The post Ideas for Winter Home Renovations appeared first on Furniture Fashion and requires written authorization to be republished on",image:"../../../../assets/images/HomeBlogImages/b-4.jpg"},
     {id:5,title:'Tips For Storing Throw Pillows',category:'Pillows',date:'18 Dec , 2013',description:"Winter is coming! If you're planning on renovating your home this winter, here are some winter home renovation ideas to consider. The post Ideas for Winter Home Renovations appeared first on Furniture Fashion and requires written authorization to be republished on",image:"../../../../assets/images/HomeBlogImages/b-5.jpg"},
     {id:6,title:'Make Rental Guests Feel At Home',category:'Home',date:'18 Dec , 2013',description:"Winter is coming! If you're planning on renovating your home this winter, here are some winter home renovation ideas to consider. The post Ideas for Winter Home Renovations appeared first on Furniture Fashion and requires written authorization to be republished on",image:"../../../../assets/images/HomeBlogImages/b-6.jpg"},
     {id:7,title:'How Often Should You Update Furniture',category:'Furniture',date:'18 Dec , 2013',description:"Winter is coming! If you're planning on renovating your home this winter, here are some winter home renovation ideas to consider. The post Ideas for Winter Home Renovations appeared first on Furniture Fashion and requires written authorization to be republished on",image:"../../../../assets/images/HomeBlogImages/b-7.jpg"}
   ]
  customOptions: OwlOptions = {
    margin:16,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav:false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      }
    },
  }
}
