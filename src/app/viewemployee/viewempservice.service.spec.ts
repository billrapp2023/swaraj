import { TestBed } from '@angular/core/testing';

import { ViewempserviceService } from './viewempservice.service';

describe('ViewempserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewempserviceService = TestBed.get(ViewempserviceService);
    expect(service).toBeTruthy();
  });
});
