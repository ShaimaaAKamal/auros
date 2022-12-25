import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ProductsService } from 'src/app/Services/ProductService/products.service';
import { ShopInterface } from 'src/app/Interfaces/shop-interface';
import { SubCategory } from 'src/app/Interfaces/sub-category';
import { Manufacturers } from 'src/app/Interfaces/manufacturers';
@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent {
  @Input() moveFilterMenu:boolean;
  @Output() moveFilterMenuChanged: EventEmitter<boolean> =   new EventEmitter();
  minPrice:number=0;
  maxPrice:number=1000;
  selected:Boolean=false;
  products:Product[]=this.__ProductsService.getAllProducts();
  filterSelection:string[]=[`${this.minPrice}$ - ${this.maxPrice}$`];
  subCategories:SubCategory[]=[{name:'Metal',id:1,categoryId:1},{name:'Wooden',id:2,categoryId:1}]
  mainCategories:ShopInterface[]=[{title:'Kitchen',categories:[{name:'Dinner Table' ,id:1,mainCateogryId:1},{name:'Dinning Chairs',id:2,mainCateogryId:1},{name:'Side Board',id:3,mainCateogryId:1},{name:'Cermaic Tiles',id:4,mainCateogryId:1},{name:'Seat',id:5,mainCateogryId:1}]},
            {title:'Living Room',categories:[{name:'Sofas',id:6,mainCateogryId:2},{name:'TV Shelfs',id:7,mainCateogryId:2},{name:'Coffee Tables',id:8,mainCateogryId:2},{name:'Bed Sheet',id:9,mainCateogryId:2},{name:'Cusions',id:10,mainCateogryId:2}]},
            {title:'Decoration',categories:[{name:'Lamps',id:11,mainCateogryId:3},{name:'Lighting',id:12,mainCateogryId:3},{name:'Furnitures',id:13,mainCateogryId:3},{name:'Speakers',id:14,mainCateogryId:3},{name:'Stools',id:15,mainCateogryId:3}]}
           ];
  Manufacturers:Manufacturers[]=[{name:'Graphic Design',id:1,noOfProducts:4},{name:'Web Design',id:2,noOfProducts:3}];
  sizes:any[]=[{name:'Xs',id:1,noOfProducts:4},{name:'M',id:2,noOfProducts:3},{name:'L',id:3,noOfProducts:2},{name:'XL',id:4,noOfProducts:4}];
  colors:any[]=[{name:'Red',value:"#f00"},{name:'Green',value:"#0f0"},{name:'Blue',value:"#00f"},{name:'White',value:"#fff"},{name:'Black',value:"#000"}];
constructor(private __ProductsService:ProductsService){}
handleOpenClick(event:any,menuElement:HTMLElement){
  menuElement.classList.toggle('static');
  menuElement.previousElementSibling?.children[1].classList.toggle('d-none');
  menuElement.previousElementSibling?.children[2].classList.toggle('d-none');
}
showSubCategories(event:any){
  event.target.parentNode.nextElementSibling.classList.toggle('d-none');
}
ngOnInit(): void {
  this.subCategories.forEach((sub:any) => {
          sub['noOfProducts']=this.products.filter(product => product.subCategoryId === sub.id).length;
  })
  this.mainCategories.forEach((category)=>{ 
     return category.categories.forEach( (cat:any) => {
      cat['noOfProducts']=this.products.filter(product => product.categoryId === cat.id).length;
      cat['subCategories']=this.subCategories.filter(subCategory => subCategory.categoryId === cat.id);
    });
 } );
}
handleCategorySelect(event:any){
  if(event.target.checked && !this.filterSelection.includes(event.target.value))
      this.filterSelection.push(event.target.value);
  else if (!event.target.checked){
      this.filterSelection.splice(this.filterSelection.indexOf(event.target.value),1);
  }
}
handleColorSelect(event:any,color:string){
if(this.filterSelection.includes(color))
{this.filterSelection.splice(this.filterSelection.indexOf(color),1);
  event.target.classList.remove('selectecColor');
}
else
{
      this.filterSelection.push(color);
     event.target.classList.add('selectecColor');
}
}
priceChange(event:any,key:string){
  const priceValue=event.target.value;
  if(key=== 'min')
  this.minPrice=priceValue;
  else   this.maxPrice=priceValue;
  this.filterSelection[0]=`${this.minPrice}$ - ${this.maxPrice}$`;

}
clearFilter(){
  this.filterSelection=[];
  const checkboxes=document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((box:any) => box.checked=false);
  const selectedColors=document.querySelectorAll('.selectecColor')
    selectedColors.forEach((color:any) => color.classList.remove('selectecColor'));

  this.minPrice=0 ; this.maxPrice=1000
}
clearCheckField(event:any){
  const checkBoxId=event.target.previousElementSibling.innerHTML;
  console.log(checkBoxId);
   if(checkBoxId.includes('$')) {this.minPrice=0 ; this.maxPrice=1000}
  else{
      const checkElemnet:any= document.getElementById(checkBoxId);
    if(checkElemnet.checked != undefined) checkElemnet.checked=false;
    if(checkElemnet.classList.contains('selectecColor')) checkElemnet.classList.remove('selectecColor');
    }

  this.filterSelection.splice(this.filterSelection.indexOf(checkBoxId),1);

}
viewProductsClick(){
   this.moveFilterMenuChanged.emit(!this.moveFilterMenu);

}
}
