import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingeBlogComponent } from './singe-blog.component';

describe('SingeBlogComponent', () => {
  let component: SingeBlogComponent;
  let fixture: ComponentFixture<SingeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingeBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
