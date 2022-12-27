import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Path } from 'src/app/Interfaces/path';
import { User } from 'src/app/Interfaces/user';
import { Router } from '@angular/router';

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

 constructor(private __Router:Router){}
submitRegisterForm(){
    const localStorageUsers=localStorage.getItem('users');
    const users:any[]=(localStorageUsers)?JSON.parse(localStorageUsers):[];
    if(this.registerForm.invalid) this.displayError=true;
    else{
      const userData=this.registerForm.value;
      const existedUser=users.find((user:User )=> user.email === userData.email);
      if(!existedUser){
          users.push({id:Date.now(),type:1,...userData});
          localStorage.setItem('users',JSON.stringify(users));
          this.__Router.navigate(['/auth/login']);
      }
      else{
        this.existedUser=true;
      }
    }
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
