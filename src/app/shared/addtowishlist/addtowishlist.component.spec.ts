import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtowishlistComponent } from './addtowishlist.component';

describe('AddtowishlistComponent', () => {
  let component: AddtowishlistComponent;
  let fixture: ComponentFixture<AddtowishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtowishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtowishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
