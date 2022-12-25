import { Component } from '@angular/core';
import { Path } from '../Interfaces/path';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  paths:Path[]=[{title:'Home',url:''},{title:'Contact us'}]

}
