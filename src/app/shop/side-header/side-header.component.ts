import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/Services/CategoriesService/categories.service';
@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.scss']
})
export class SideHeaderComponent {
categories:any[]=[];
subCategories:any[]=[]
constructor(private __CategoriesService:CategoriesService){}
ngOnInit(): void {
  this.categories=this.__CategoriesService.getAllCategories();
  this.subCategories=this.__CategoriesService.subCategories;
  this.categories.forEach(category =>{
     category['noOfSubCategories']=this.subCategories.filter((sub:any) => sub.categoryId === category.id).length;
  });
}
showSubCategories(event:any){
  event.target.parentNode.parentNode.nextElementSibling.classList.toggle('d-none');
}
}
