import { Injectable } from '@angular/core'
import { SubCategory } from 'src/app/Interfaces/sub-category'

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
 subCategories:SubCategory[]=[{name:'Metal',id:1,categoryId:1},{name:'Wooden',id:2,categoryId:1}]
  constructor() { }
  getAllSubCategories(){
    return this.subCategories;
  }
}
