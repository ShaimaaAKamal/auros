import { Component } from '@angular/core';

interface homeCategory{
  id:number,
  image:string,
  name:string,
  items:number
}


@Component({
  selector: 'app-home-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
 homeCategories:homeCategory[]=[
  {image:"../../../assets/images/HomeCategories/h1-bn-1.jpg",name:'Stools',id:15,items:4},
  {image:"../../../assets/images/HomeCategories/h1-bn-2.jpg",name:'Sofas',id:6,items:4},
 ];
}
