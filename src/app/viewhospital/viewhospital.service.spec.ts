import { TestBed } from '@angular/core/testing';

import { ViewhospitalService } from './viewhospital.service';

describe('ViewhospitalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewhospitalService = TestBed.get(ViewhospitalService);
    expect(service).toBeTruthy();
  });
});
