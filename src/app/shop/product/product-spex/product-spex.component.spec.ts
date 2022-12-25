import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpexComponent } from './product-spex.component';

describe('ProductSpexComponent', () => {
  let component: ProductSpexComponent;
  let fixture: ComponentFixture<ProductSpexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSpexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
