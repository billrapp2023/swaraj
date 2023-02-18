import { TestBed } from '@angular/core/testing';

import { AdddonorService } from './adddonor.service';

describe('AdddonorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdddonorService = TestBed.get(AdddonorService);
    expect(service).toBeTruthy();
  });
});
