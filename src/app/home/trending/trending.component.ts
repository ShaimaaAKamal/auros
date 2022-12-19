import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {

    Trending = [
     {
       id: 1,
       src:"../../../assets/images/trending/teapot/hummingbird-printed-t-shirt.jpg",
       srcHover:"../../../assets/images/trending/teapot/hummingbird-printed-t-shirt3.jpg",
       alt:'Side 1',
       title:'Teapot',
       productId:1,
       discount:10,
       new:'$21.90',
       old:"$43.90",
     },
     {
       id: 2,
       src:"../../../assets/images/trending/table/brown-bear-printed-sweater2.jpg",
       srcHover:"../../../assets/images/trending/table/brown-bear-printed-sweater3.jpg",
       alt:'Side 2',
       discount:20,
       title:'Miro Dinning Table',
      productId:2,old:"$83.90",new:'$52.90',
     },
     {
       id: 3,
       src:"../../../assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster2.jpg",
       srcHover:"../../../assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster.jpg",
       alt:'Side 3',
       title:'Janus Table Lamp',
       discount:10,
       productId:3,
       old:"$73.90",new:'$41.90'
     },
     {
       id: 4,
       src:"../../../assets/images/trending/Discus/the-adventure-begins-framed-poster.jpg",
       srcHover:"../../../assets/images/trending/Discus/the-adventure-begins-framed-poster2.jpg",
       alt:'Side 4',
       title:'Discus Floor and Table',
       productId:4,
       discount:10,
        old:"$199.90",new:'$150.90'
     },
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
      768: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
  }
}
