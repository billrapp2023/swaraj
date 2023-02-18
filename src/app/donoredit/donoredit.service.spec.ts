import { TestBed } from '@angular/core/testing';

import { DonoreditService } from './donoredit.service';

describe('DonoreditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonoreditService = TestBed.get(DonoreditService);
    expect(service).toBeTruthy();
  });
});
