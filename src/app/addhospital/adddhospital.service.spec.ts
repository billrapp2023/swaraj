import { TestBed } from '@angular/core/testing';

import { AdddhospitalService } from './adddhospital.service';

describe('AdddhospitalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdddhospitalService = TestBed.get(AdddhospitalService);
    expect(service).toBeTruthy();
  });
});
