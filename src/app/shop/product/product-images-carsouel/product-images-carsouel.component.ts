import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-images-carsouel',
  templateUrl: './product-images-carsouel.component.html',
  styleUrls: ['./product-images-carsouel.component.scss']
})
export class ProductImagesCarsouelComponent {
 @Input() imagePath:string;
 productImages=[1,2,3,4,5];
}
