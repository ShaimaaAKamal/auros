import { AuthService } from './../../Services/AuthService/auth.service';
import { Component } from '@angular/core';
import { Path } from 'src/app/Interfaces/path';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  paths:Path[]=[{title:'Home',url:""},{title:'Login'}];
  visible:boolean=false;
  displayError:boolean=false;
  nonExistedUser:boolean=false;
  inValidCred:boolean=false;
  passwordType:string='password';

 constructor(private __AuthService:AuthService){}
   loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
  });

  submitLoginForm(){
    const loginResult=this.__AuthService.handleLogin(this.loginForm,this.displayError,this.nonExistedUser,this.inValidCred)
     this.displayError=loginResult.displayError;
     this.nonExistedUser=loginResult.nonExistedUser;
     this.inValidCred=loginResult.inValidCred;
  }

  showPassword(){
      this.passwordType='text';
      this.visible=true;
    }
  hidePassword(){
      this.passwordType='password';
      this.visible=false;
  }
}
