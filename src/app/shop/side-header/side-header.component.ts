import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/Services/CategoriesService/categories.service';
import { SubCategory } from 'src/app/Interfaces/sub-category';
import { Category } from 'src/app/Interfaces/category';
import { SubCategoryService } from 'src/app/Services/SubCategoryService/sub-category.service';
@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.scss']
})
export class SideHeaderComponent {
categories:Category[]=[];
subCategories:SubCategory[]=[]
constructor(private __CategoriesService:CategoriesService,private __SubCategoryService:SubCategoryService){}
ngOnInit(): void {
  this.categories=this.__CategoriesService.getAllCategories();
  this.subCategories=this.__SubCategoryService.getAllSubCategories();
  this.categories.forEach(category =>{
     category['noOfSubCategories']=this.subCategories.filter((sub:SubCategory) => sub.categoryId === category.id).length;
  });
}
showSubCategories(event:any){
  event.target.parentNode.parentNode.nextElementSibling.classList.toggle('d-none');
}
}
