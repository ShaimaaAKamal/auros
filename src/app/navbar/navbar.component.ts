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

shop:ShopInterface[]=[{title:'Kitchen',categories:[{name:'Dinner Table' ,id:1},{name:'Dinning Chairs',id:2},{name:'Side Board',id:3},{name:'Cermaic Tiles',id:4},{name:'Seat',id:5}]},
            {title:'Living Room',categories:[{name:'Sofa',id:6},{name:'TV Shelfs',id:7},{name:'Coffee Tables',id:8},{name:'Bed Sheet',id:9},{name:'Cusions',id:10}]},
            {title:'Decoration',categories:[{name:'Lamps',id:11},{name:'Lighting',id:12},{name:'Furnitures',id:13},{name:'Speakers',id:14},{name:'Stools',id:15}]}
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
