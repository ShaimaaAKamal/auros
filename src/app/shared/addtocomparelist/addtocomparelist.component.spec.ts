import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocomparelistComponent } from './addtocomparelist.component';

describe('AddtocomparelistComponent', () => {
  let component: AddtocomparelistComponent;
  let fixture: ComponentFixture<AddtocomparelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtocomparelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtocomparelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
