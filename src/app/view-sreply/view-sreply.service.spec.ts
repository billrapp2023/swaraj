import { TestBed } from '@angular/core/testing';

import { ViewSreplyService } from './view-sreply.service';

describe('ViewSreplyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewSreplyService = TestBed.get(ViewSreplyService);
    expect(service).toBeTruthy();
  });
});
