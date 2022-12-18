import { Component } from '@angular/core';
import { CategoryItems } from 'src/app/Interfaces/category-items';
@Component({
  selector: 'app-home-new-design',
  templateUrl: './new-design.component.html',
  styleUrls: ['./new-design.component.scss']
})
export class NewDesignComponent {
category:CategoryItems={image:"../../../assets/images/newHomeDesign/h1-bn-3.jpg",name:'Furnitures',id:13,items:4}

}
