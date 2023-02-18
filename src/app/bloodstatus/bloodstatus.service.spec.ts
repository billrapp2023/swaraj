import { TestBed } from '@angular/core/testing';

import { BloodstatusService } from './bloodstatus.service';

describe('BloodstatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodstatusService = TestBed.get(BloodstatusService);
    expect(service).toBeTruthy();
  });
});
