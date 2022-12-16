import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { User } from '../Interfaces/user';
import { Product } from '../Interfaces/product';
import { ShopInterface } from '../Interfaces/shop-interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
@ViewChild('collapse') collapse:ElementRef;


closeSearch:boolean=false;
cartItems:number=0;
wishlistNumber:number=0;
compareNumber:number=0;
loggedUser:boolean=true;

shop:ShopInterface[]=[{title:'Kitchen',categories:['Dinner Table','Dinning Chairs','Side Board','Cermaic Tiles','Seat']},
            {title:'Living Room',categories:['Sofa','TV Shelfs','Coffee Tables','Bed Sheet','Cusions']},
            {title:'Decoration',categories:['Lamps','Lighting','Furnitures','Speakers','Stools']}
           ]
productTitles:string[]=['Product Name','Product Feature','Product Special']
products:Product[]=[{id:1,prodImage:'../../assets/images/ProductName/hummingbird-printed-t-shirt.jpg',name:'Teatop',old:"$43.90",new:'$21.90'},
                    {id:2,prodImage:'../../assets/images/ProductName/brown-bear-printed-sweater.jpg',name:'Miro Dinning Table',old:"$83.90",new:'$52.90'},
                    {id:3,prodImage:'../../assets/images/ProductName/the-best-is-yet-to-come-framed-poster.jpg',name:'Janus Table Lamp',old:"$73.90",new:'$41.90'}]
user:User={name:'ahmed'}
             
 closeMenu(){
  this.collapse.nativeElement.classList.remove('show');
}

handleOpenSearch(){
  this.closeSearch=!this.closeSearch;
}

handleOpen(event:Event){
}
ngOnInit(): void {
}
 ngAfterViewInit() {
  }
}
