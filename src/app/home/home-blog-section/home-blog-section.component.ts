import { BlogService } from './../../Services/BlogService/blog.service';
import { Blog } from './../../Interfaces/blog';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home-blog-section',
  templateUrl: './home-blog-section.component.html',
  styleUrls: ['./home-blog-section.component.scss']
})
export class HomeBlogSectionComponent {
  constructor(private __BlogService:BlogService){}
  blogs:Blog[] = this.__BlogService.getAllBlogs();
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
