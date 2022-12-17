import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
@ViewChild('productsMenu') productsMenu:ElementRef;
@ViewChild('LinksMenu') LinksMenu:ElementRef;

valid:boolean=true;
emailAddress:string='';
handleOpenClick(menuElement:HTMLElement){
  menuElement.classList.toggle('static');
}
handleSubscribe(){
  const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  this.valid=regex.test(this.emailAddress);
}
}
