import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagesCarsouelComponent } from './product-images-carsouel.component';

describe('ProductImagesCarsouelComponent', () => {
  let component: ProductImagesCarsouelComponent;
  let fixture: ComponentFixture<ProductImagesCarsouelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImagesCarsouelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImagesCarsouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
