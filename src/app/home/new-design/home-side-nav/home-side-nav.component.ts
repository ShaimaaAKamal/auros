import { Component, OnInit } from '@angular/core';
import * as e from 'express';

@Component({
  selector: 'app-home-side-nav',
  templateUrl: './home-side-nav.component.html',
  styleUrls: ['./home-side-nav.component.scss']
})
export class HomeSideNavComponent implements OnInit {
categories:boolean[]=[true,false,false,false,false]
 Data:any[]=[];
 ALLData=[
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

  getData(category:string){
     switch(category){
      case 'all': this.Data=this.ALLData; this.categories=this.categories.map((category,index)=> index === 0);break;
      case 'Furnitures': this.Data=this.ALLData.slice(0,2);this.categories=this.categories.map((category,index)=> index === 1);break;
      case 'Chairs': this.Data=this.ALLData.slice(0,3); this.categories=this.categories.map((category,index)=> index === 2); break;
      case 'Lighting': this.Data=this.ALLData.slice(0,2); this.categories=this.categories.map((category,index)=> index === 3); break;
      case 'Decor': this.Data=[]; this.categories=this.categories.map((category,index)=> index === 4); break;
     }
  }
   ngOnInit(): void {
       this.Data=this.ALLData;
   }
   handleFocus(category:string){
       this.getData(category);
   }

}
