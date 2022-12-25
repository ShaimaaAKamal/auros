import { Component } from '@angular/core';
import { Path } from '../Interfaces/path';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  paths:Path[]=[{title:'Home',url:''},{title:'blog'}]
}
