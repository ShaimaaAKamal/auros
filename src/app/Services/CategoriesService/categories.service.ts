import { Injectable } from '@angular/core';
import { Category } from 'src/app/Interfaces/category';
import { ShopInterface } from 'src/app/Interfaces/shop-interface';
import { MainCategoryServiceService } from '../MainCategoryService/main-category-service.service';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 categories:Category[]=[];
 mainCategories:ShopInterface[]=this.__MainCategoryServiceService.getMainCategories();
constructor(private __MainCategoryServiceService:MainCategoryServiceService ) {  this.categories=this.getAllCategories();  }

 getAllCategories(){
  const categories:Category[]=[]
  this.mainCategories.forEach((mainCategory:any) => {
    categories.push(...mainCategory.categories);
  });
  return categories;
 }
 getCategoryById(id:number): Category|undefined{
    // return this.categories.find(category => category.id===parseInt(id));
        return this.categories.find(category => category.id=== id);
   }
  
}
