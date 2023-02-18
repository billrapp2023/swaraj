import { TestBed } from '@angular/core/testing';

import { UpdateaboutService } from './updateabout.service';

describe('UpdateaboutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateaboutService = TestBed.get(UpdateaboutService);
    expect(service).toBeTruthy();
  });
});
