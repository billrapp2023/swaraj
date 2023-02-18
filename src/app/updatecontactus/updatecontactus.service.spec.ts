import { TestBed } from '@angular/core/testing';

import { UpdatecontactusService } from './updatecontactus.service';

describe('UpdatecontactusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatecontactusService = TestBed.get(UpdatecontactusService);
    expect(service).toBeTruthy();
  });
});
