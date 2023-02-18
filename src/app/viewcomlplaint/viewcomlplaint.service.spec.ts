import { TestBed } from '@angular/core/testing';

import { ViewcomlplaintService } from './viewcomlplaint.service';

describe('ViewcomlplaintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewcomlplaintService = TestBed.get(ViewcomlplaintService);
    expect(service).toBeTruthy();
  });
});
