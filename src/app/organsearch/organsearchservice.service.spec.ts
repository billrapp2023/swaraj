import { TestBed } from '@angular/core/testing';

import { OrgansearchserviceService } from './organsearchservice.service';

describe('OrgansearchserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgansearchserviceService = TestBed.get(OrgansearchserviceService);
    expect(service).toBeTruthy();
  });
});
