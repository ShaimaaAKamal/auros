import { TestBed } from '@angular/core/testing';

import { PagnationService } from './pagnation.service';

describe('PagnationService', () => {
  let service: PagnationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagnationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
