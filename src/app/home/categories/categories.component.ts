import { CategoryItems } from './../../Interfaces/category-items';
import { Component } from '@angular/core';



@Component({
  selector: 'app-home-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
 homeCategories: CategoryItems[]=[
  {image:"../../../assets/images/HomeCategories/h1-bn-1.jpg",name:'Stools',id:15,items:4},
  {image:"../../../assets/images/HomeCategories/h1-bn-2.jpg",name:'Sofas',id:6,items:4},
 ];
}
