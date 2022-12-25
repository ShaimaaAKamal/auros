import { Injectable } from '@angular/core';
import { ShopInterface } from 'src/app/Interfaces/shop-interface';

@Injectable({
  providedIn: 'root'
})
export class MainCategoryServiceService {
shop:ShopInterface[]=[{title:'Kitchen',categories:[{name:'Dinner Table' ,id:1,mainCateogryId:1},{name:'Dinning Chairs',id:2,mainCateogryId:1},{name:'Side Board',id:3,mainCateogryId:1},{name:'Cermaic Tiles',id:4,mainCateogryId:1},{name:'Seat',id:5,mainCateogryId:1}]},
            {title:'Living Room',categories:[{name:'Sofas',id:6,mainCateogryId:2},{name:'TV Shelfs',id:7,mainCateogryId:2},{name:'Coffee Tables',id:8,mainCateogryId:2},{name:'Bed Sheet',id:9,mainCateogryId:2},{name:'Cusions',id:10,mainCateogryId:2}]},
            {title:'Decoration',categories:[{name:'Lamps',id:11,mainCateogryId:3},{name:'Lighting',id:12,mainCateogryId:3},{name:'Furnitures',id:13,mainCateogryId:3},{name:'Speakers',id:14,mainCateogryId:3},{name:'Stools',id:15,mainCateogryId:3}]}
           ]
  constructor() { }

  getMainCategories(){
    return this.shop;
  }
}
