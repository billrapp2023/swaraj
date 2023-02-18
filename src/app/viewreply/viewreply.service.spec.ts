import { TestBed } from '@angular/core/testing';

import { ViewreplyService } from './viewreply.service';

describe('ViewreplyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewreplyService = TestBed.get(ViewreplyService);
    expect(service).toBeTruthy();
  });
});
