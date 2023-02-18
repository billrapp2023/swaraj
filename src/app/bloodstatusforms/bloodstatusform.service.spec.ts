import { TestBed } from '@angular/core/testing';

import { BloodstatusformService } from './bloodstatusform.service';

describe('BloodstatusformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodstatusformService = TestBed.get(BloodstatusformService);
    expect(service).toBeTruthy();
  });
});
