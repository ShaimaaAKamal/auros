import { Component } from '@angular/core';
import { Path } from 'src/app/Interfaces/path';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  paths:Path[]=[{title:'Home',url:""},{title:'Register'}];
    visible:boolean=false;

 showPassword(){

 }
hidePassword(){
  
 }

}
