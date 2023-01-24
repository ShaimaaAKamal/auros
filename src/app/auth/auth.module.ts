import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { GoogleLoginProvider, SocialLoginModule , SocialAuthServiceConfig} from '@abacritt/angularx-social-login';
// import { FacebookLoginProvider } from '@abacritt/angularx-social-login';
@NgModule({
  declarations: [
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent
  ],
  //    providers: [
      
  //   {
  //     provide: 'SocialAuthServiceConfig',
  //     useValue: {
  //       autoLogin: false,
  //       providers: [
  //         {
  //           id: GoogleLoginProvider.PROVIDER_ID,
  //           provider: new GoogleLoginProvider(
  //             '833486081205-skkvhahhdmmrhc2mm9h809sd10eul7hn.apps.googleusercontent.com'
  //           )
  //         },
  //         {
  //           id: FacebookLoginProvider.PROVIDER_ID,
  //           provider: new FacebookLoginProvider('2882402905230036')
  //         }
  //       ],
  //       onError: (err) => {
  //         console.error(err);
  //       }
  //     } as SocialAuthServiceConfig,
  //   }
  // ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    // SocialLoginModule,
  ]
})
export class AuthModule { }
