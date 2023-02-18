import { TestBed } from '@angular/core/testing';

import { DonorsearchService } from './donorsearch.service';

describe('DonorsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonorsearchService = TestBed.get(DonorsearchService);
    expect(service).toBeTruthy();
  });
});
