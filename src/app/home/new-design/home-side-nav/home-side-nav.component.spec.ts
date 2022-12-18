import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSideNavComponent } from './home-side-nav.component';

describe('HomeSideNavComponent', () => {
  let component: HomeSideNavComponent;
  let fixture: ComponentFixture<HomeSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
