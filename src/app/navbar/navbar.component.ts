import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

interface shopInterface{
  title:string,
  categories:string[]
}

interface Product{
  prodImage:string,
  name:string,
  old:string,
  new:string,

}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
@ViewChild ('navContainer') navContainer:ElementRef;
@ViewChild('collapse') collapse:ElementRef;

shop:shopInterface[]=[{title:'Kitchen',categories:['Dinner Table','Dinning Chairs','Side Board','Cermaic Tiles','Seat']},
            {title:'Living Room',categories:['Sofa','TV Shelfs','Coffee Tables','Bed Sheet','Cusions']},
            {title:'Decoration',categories:['Lamps','Lighting','Furnitures','Speakers','Stools']}
           ]
productTitles:string[]=['Product Name','Product Feature','Product Special']
products:Product[]=[{prodImage:'../../assets/images/ProductName/hummingbird-printed-t-shirt.jpg',name:'Teatop',old:"$43.90",new:'$21.90'},
               {prodImage:'../../assets/images/ProductName/brown-bear-printed-sweater.jpg',name:'Miro Dinning Table',old:"$83.90",new:'$52.90'},
                    {prodImage:'../../assets/images/ProductName/the-best-is-yet-to-come-framed-poster.jpg',name:'Janus Table Lamp',old:"$73.90",new:'$41.90'}]

             
 closeMenu(){
  this.collapse.nativeElement.classList.remove('show');
}
handleOpen(event:Event){
}
ngOnInit(): void {
}
 ngAfterViewInit() {
  }
}
