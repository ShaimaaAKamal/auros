import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as e from 'express';

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

  products=[
     {
       id: 1,
       src:"/assets/images/trending/teapot/hummingbird-printed-t-shirt.jpg",
       srcHover:"/assets/images/trending/teapot/hummingbird-printed-t-shirt3.jpg",
       alt:'Side 1',
       title:'Teapot',
       productId:1,
       old:"$43.90",new:'$21.90',
       categoryId:1,
       subCategoryId:1,              
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
     },
     {
       id: 2,
       src:"/assets/images/trending/table/brown-bear-printed-sweater2.jpg",
       srcHover:"/assets/images/trending/table/brown-bear-printed-sweater3.jpg",
       alt:'Side 2',
       subCategoryId:6,              
       title:'Miro Dinning Table',
      productId:2,old:"$83.90",new:'$52.90',
             categoryId:2,
                   desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'

     },
     {
       id: 3,
       src:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster2.jpg",
       srcHover:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster.jpg",
       alt:'Side 3',
       title:'Janus Table Lamp',
       productId:3,
       subCategoryId:6,              
       old:"$73.90",new:'$41.90',
              categoryId:3,
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
     },
     {
       id: 4,
       desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!'
       ,src:"/assets/images/trending/Discus/the-adventure-begins-framed-poster.jpg",
       srcHover:"/assets/images/trending/Discus/the-adventure-begins-framed-poster2.jpg",
       alt:'Side 4',
       subCategoryId:2,              
       title:'discus Floor and Table',
       productId:4,
       old:"$199.90",new:'$150.90',
       stock:0,
       categoryId:4,
     },
      {
       id: 5,
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       src:"/assets/images/trending/teapot/hummingbird-printed-t-shirt.jpg",
       srcHover:"/assets/images/trending/teapot/hummingbird-printed-t-shirt3.jpg",
       alt:'Side 1',
              subCategoryId:3,              
       title:'Teapot',
       productId:1,
       isNew:true,
       old:"$43.90",discount:50,
              stock:0,
                     categoryId:1,

     },
     {
      stock:4,
       id: 6,
       src:"/assets/images/trending/table/brown-bear-printed-sweater2.jpg",
       srcHover:"/assets/images/trending/table/brown-bear-printed-sweater3.jpg",
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       alt:'Side 2',
       isNew:false,
       title:'Miro Dinning Table',
      productId:2,old:"$83.90",discount:20,
             categoryId:2,

     },
     {
       id: 7,
       src:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster2.jpg",
       srcHover:"/assets/images/trending/TableLamp/the-best-is-yet-to-come-framed-poster.jpg",
       alt:'Side 3',
       isNew:true,
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       title:'Janus Table Lamp',
       productId:3,
       old:"$73.90",new:'$41.90',
                     stock:3,
                            categoryId:3,

     },
     {
       id: 8,
       src:"/assets/images/trending/Discus/the-adventure-begins-framed-poster.jpg",
       srcHover:"/assets/images/trending/Discus/the-adventure-begins-framed-poster2.jpg",
       alt:'Side 4',
             desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi culpa assumenda, eligendi nisi consectetur quis similique inventore. Delectus voluptates non quis, sit minima totam laboriosam autem commodi minus harum!',
       title:'discus Floor and Table',
       productId:4,
       old:"$199.90",discount:40,
                     stock:5,       categoryId:4,

     },
   ];
  filterSelection:string[]=[`${this.minPrice}$ - ${this.maxPrice}$`];
  subCategories=[{name:'Metal',id:1,categoryId:1},{name:'Wooden',id:2,categoryId:1}]
  mainCategories:any[]=[{title:'Kitchen',categories:[{name:'Dinner Table' ,id:1},{name:'Dinning Chairs',id:2},{name:'Side Board',id:3},{name:'Cermaic Tiles',id:4},{name:'Seat',id:5}]},
            {title:'Living Room',categories:[{name:'Sofas',id:6},{name:'TV Shelfs',id:7},{name:'Coffee Tables',id:8},{name:'Bed Sheet',id:9},{name:'Cusions',id:10}]},
            {title:'Decoration',categories:[{name:'Lamps',id:11},{name:'Lighting',id:12},{name:'Furnitures',id:13},{name:'Speakers',id:14},{name:'Stools',id:15}]}
           ];
  Manufacturers:any[]=[{name:'Graphic Design',id:1,ManufactureId:1,noOfProducts:4},{name:'Web Design',id:2,ManufactureId:1,noOfProducts:3}];
  sizes:any[]=[{name:'Xs',id:1,noOfProducts:4},{name:'M',id:2,noOfProducts:3},{name:'L',id:3,noOfProducts:2},{name:'XL',id:4,noOfProducts:4}];
  colors:any[]=[{name:'Red',value:"#f00"},{name:'Green',value:"#0f0"},{name:'Blue',value:"#00f"},{name:'White',value:"#fff"},{name:'Black',value:"#000"}];
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
