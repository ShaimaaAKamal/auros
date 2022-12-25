import { Component, Input } from '@angular/core';
import { Path } from 'src/app/Interfaces/path';
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
@Input('paths') paths:Path[];
@Input('mainTitle') mainTitle:string='';
 }
