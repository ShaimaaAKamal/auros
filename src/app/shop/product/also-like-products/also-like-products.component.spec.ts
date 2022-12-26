import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoLikeProductsComponent } from './also-like-products.component';

describe('AlsoLikeProductsComponent', () => {
  let component: AlsoLikeProductsComponent;
  let fixture: ComponentFixture<AlsoLikeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsoLikeProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlsoLikeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
