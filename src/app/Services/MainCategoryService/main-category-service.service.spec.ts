import { TestBed } from '@angular/core/testing';

import { MainCategoryServiceService } from './main-category-service.service';

describe('MainCategoryServiceService', () => {
  let service: MainCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
