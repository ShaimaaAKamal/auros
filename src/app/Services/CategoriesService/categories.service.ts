import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 categories:any[]=[];
 subCategories=[{name:'Metal',id:1,categoryId:1},{name:'Wooden',id:2,categoryId:1}]
 mainCategories:any[]=[{title:'Kitchen',categories:[{name:'Dinner Table' ,id:1},{name:'Dinning Chairs',id:2},{name:'Side Board',id:3},{name:'Cermaic Tiles',id:4},{name:'Seat',id:5}]},
            {title:'Living Room',categories:[{name:'Sofas',id:6},{name:'TV Shelfs',id:7},{name:'Coffee Tables',id:8},{name:'Bed Sheet',id:9},{name:'Cusions',id:10}]},
            {title:'Decoration',categories:[{name:'Lamps',id:11},{name:'Lighting',id:12},{name:'Furnitures',id:13},{name:'Speakers',id:14},{name:'Stools',id:15}]}
           ];
  constructor() {  this.categories=this.getAllCategories();  }

 getAllCategories(){
  const categories:any[]=[]
  this.mainCategories.forEach((mainCategory:any) => {
    categories.push(...mainCategory.categories);
  });
  return categories;
 }
 getCategoryById(id:string){
    return this.categories.find(category => category.id===parseInt(id));
   }
}
