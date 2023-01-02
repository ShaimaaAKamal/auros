import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/AuthService/auth.service';
import { Router } from '@angular/router';
import { Path } from '../../Interfaces/path';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  loggedUser:any;
  paths:Path[];
constructor(private __AuthService:AuthService,private __Router:Router){
    this.__AuthService.user.subscribe({
      next:()=>{
              this.loggedUser=this.__AuthService.user.getValue();
              if(this.loggedUser){
                 this.paths=[{title:'Home',url:''},{title:'My Account',url:`/auth/profile/${this.loggedUser.id}`},{title:'My Cart'}];
              }
              else{
                this.__Router.navigate(['/auth/login']);
              }
      }
    })
  }
}
