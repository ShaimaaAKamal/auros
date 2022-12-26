import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsouelComponentComponent } from './carsouel-component.component';

describe('CarsouelComponentComponent', () => {
  let component: CarsouelComponentComponent;
  let fixture: ComponentFixture<CarsouelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsouelComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsouelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
