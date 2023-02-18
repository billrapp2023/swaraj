import { TestBed } from '@angular/core/testing';

import { Bloodstatusver2Service } from './bloodstatusver2.service';

describe('Bloodstatusver2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Bloodstatusver2Service = TestBed.get(Bloodstatusver2Service);
    expect(service).toBeTruthy();
  });
});
