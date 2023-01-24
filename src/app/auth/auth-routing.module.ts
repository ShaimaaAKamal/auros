import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthGuard } from '../Guards/auth.guard';
import { GuestGuard } from '../Guards/guestGuard/authGuard/guest.guard';


const routes: Routes = [
  // {path:'',component:ProfileComponent,title:'Profile'},
  {path:'login',canActivate:[GuestGuard],component:LoginComponent,title:'Login'},
  {path:'register',canActivate:[GuestGuard],component:RegisterComponent,title:'Register'},
  {path:'forgetPassword',component:ForgetPasswordComponent,title:'Forget Password'},
  {path:'profile/:userId',canActivate:[AuthGuard],component:ProfileComponent,title:'Profile'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
