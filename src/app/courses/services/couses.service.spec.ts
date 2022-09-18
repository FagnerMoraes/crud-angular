import { TestBed } from '@angular/core/testing';

import { CousesService } from './couses.service';

describe('CousesService', () => {
  let service: CousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
