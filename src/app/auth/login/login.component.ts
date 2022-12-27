import { Component } from '@angular/core';
import { Path } from 'src/app/Interfaces/path';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  paths:Path[]=[{title:'Home',url:""},{title:'Login'}];
  visible:boolean=false;

 showPassword(){

 }
hidePassword(){
  
 }
}
