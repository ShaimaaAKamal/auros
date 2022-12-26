import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../Interfaces/product';


@Component({
  selector: 'app-carsouel-component',
  templateUrl: './carsouel-component.component.html',
  styleUrls: ['./carsouel-component.component.scss']
})
export class CarsouelComponentComponent {
 @Input() customOptions:OwlOptions;
 @Input() products :Product[];
}
