import { AuthService } from './../../Services/AuthService/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Path } from 'src/app/Interfaces/path';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  paths:Path[]=[{title:'Home',url:""},{title:'Register'}];
  visible:boolean=false;
  displayError:boolean=false;
  existedUser:boolean=false;
  passwordType:string='password'
   registerForm = new FormGroup({
    fname: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    lname: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    phone: new FormControl('', [Validators.required,Validators.pattern('^0(10|20|15)[0-9]{8}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    birthdate: new FormControl(''),
    gender: new FormControl('',[Validators.required]),
    recevieOffers: new FormControl(null),
    newLetters: new FormControl(null,),
    policyAgree: new FormControl(null,[Validators.required]),
  });

 constructor(private __AuthService:AuthService){}
submitRegisterForm(){
  const registerResult=this.__AuthService.handleRegister(this.registerForm,this.displayError,this.existedUser)
     this.displayError=registerResult.displayError;
     this.existedUser=registerResult.existedUser;
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
