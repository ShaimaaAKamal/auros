import { Component } from '@angular/core';
import { Path } from 'src/app/Interfaces/path';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  paths:Path[]=[{title:'Home',url:""},{title:'Forget Password'}];

}
