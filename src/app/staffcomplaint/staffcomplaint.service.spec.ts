import { TestBed } from '@angular/core/testing';

import { StaffcomplaintService } from './staffcomplaint.service';

describe('StaffcomplaintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffcomplaintService = TestBed.get(StaffcomplaintService);
    expect(service).toBeTruthy();
  });
});
