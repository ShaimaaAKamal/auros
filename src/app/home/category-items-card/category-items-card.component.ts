import { Component, Input } from '@angular/core';
import { CategoryItems } from 'src/app/Interfaces/category-items';
@Component({
  selector: 'app-category-items-card',
  templateUrl: './category-items-card.component.html',
  styleUrls: ['./category-items-card.component.scss']
})
export class CategoryItemsCardComponent {
@Input('category') category:CategoryItems;
@Input('absClasses') absClasses:string[];
}
