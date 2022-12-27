import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/Interfaces/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
loggedStatus=localStorage.getItem('loggedUser');
loggedUser:any=new BehaviorSubject(this.loggedStatus?JSON.parse(this.loggedStatus):false)
exitedUser=localStorage.getItem('user');
user:any=new BehaviorSubject(this.exitedUser? JSON.parse(this.exitedUser):null);
  constructor(private __Router:Router) { }

  handleLogin(form:FormGroup,displayError:boolean,nonExistedUser:boolean,inValidCred:boolean){
    const localStorageUsers=localStorage.getItem('users');
    const users:any[]=(localStorageUsers)?JSON.parse(localStorageUsers):[];
    if(form.invalid) displayError=true;
    else{
      const userData=form.value;
      const existedUser=users.find((user)=> user.email === userData.email);
      if(!existedUser){nonExistedUser=true; inValidCred=false;}
      else if(existedUser.password !== userData.password){inValidCred=true; nonExistedUser=false;}
      else{
            this.user.next(existedUser);
            this.loggedUser.next(true);
            localStorage.setItem('loggedUser',JSON.stringify(true));
            localStorage.setItem('user',JSON.stringify(existedUser));
            this.__Router.navigate(['']);
      }
    }
    return {displayError,nonExistedUser,inValidCred}
  }
  signOut(){
            this.user.next(null);
            this.loggedUser.next(false);
            localStorage.setItem('loggedUser',JSON.stringify(false));
            localStorage.removeItem('user');
            this.__Router.navigate(['']);
  }

  handleRegister(form:FormGroup,displayError:boolean,existedUser:boolean){
    const localStorageUsers=localStorage.getItem('users');
    const users:any[]=(localStorageUsers)?JSON.parse(localStorageUsers):[];
    if(form.invalid) displayError=true;
    else{
      const userData=form.value;
      const AlreadyexistedUser=users.find((user:User )=> user.email === userData.email);
      if(!AlreadyexistedUser){
          users.push({id:Date.now(),type:1,...userData});
          localStorage.setItem('users',JSON.stringify(users));
          this.__Router.navigate(['/auth/login']);
      }
      else{
        existedUser=true;
      }
    }
    return {displayError,existedUser}
  }
  
}
