import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglewishlishproductComponent } from './singlewishlishproduct.component';

describe('SinglewishlishproductComponent', () => {
  let component: SinglewishlishproductComponent;
  let fixture: ComponentFixture<SinglewishlishproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglewishlishproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglewishlishproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
