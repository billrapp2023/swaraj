import { TestBed } from '@angular/core/testing';

import { AddemployeeService } from './addemployee.service';

describe('AddemployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddemployeeService = TestBed.get(AddemployeeService);
    expect(service).toBeTruthy();
  });
});
