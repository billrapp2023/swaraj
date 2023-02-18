import { TestBed } from '@angular/core/testing';

import { DonatnserviceService } from './donatnservice.service';

describe('DonatnserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonatnserviceService = TestBed.get(DonatnserviceService);
    expect(service).toBeTruthy();
  });
});
