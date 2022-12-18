import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrls: ['./sidenav-items.component.scss']
})
export class SidenavItemsComponent {
@Input('category') category:string;

 Data = [
     {
       id: 1,
       src:"../../../assets/images/trending/teapot/hummingbird-printed-t-shirt.jpg",
       srcHover:"../../../assets/images/trending/teapot/hummingbird-printed-t-shirt3.jpg",
       alt:'Side 1',
       title:'Teapot',
       productId:1,
       old:"$43.90",new:'$21.90'
     },
     {
       id: 2,
       src:"../../../assets/images/trending/table/brown-bear-printed-sweater2.jpg",
       srcHover:"../../../assets/images/trending/table/brown-bear-printed-sweater3.jpg",
       alt:'Side 2',
       title:'Miro Dinning Table',
      productId:2,old:"$83.90",new:'$52.90',
     },
     {
       id: 3,
       src:"../../../assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster2.jpg",
       srcHover:"../../../assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster.jpg",
       alt:'Side 3',
       title:'Janus Table Lamp',
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
        old:"$199.90",new:'$150.90'
     },
   ]
 DataLength:number=this.Data.length;
 DataSlideIndex=Math.ceil(((this.DataLength-1)/2));
 CarsouelOneData=this.Data.slice(0,this.DataSlideIndex);
 CarsouelTwoData=this.Data.slice(this.DataSlideIndex,this.DataLength);
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
      }
    },
  }
customOptionsTwo: OwlOptions = {
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
      }
    },
  }

}
