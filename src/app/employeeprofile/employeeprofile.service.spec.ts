import { TestBed } from '@angular/core/testing';

import { EmployeeprofileService } from './employeeprofile.service';

describe('EmployeeprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeprofileService = TestBed.get(EmployeeprofileService);
    expect(service).toBeTruthy();
  });
});
