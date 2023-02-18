import { TestBed } from '@angular/core/testing';

import { ViewfeedbackService } from './viewfeedback.service';

describe('ViewfeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewfeedbackService = TestBed.get(ViewfeedbackService);
    expect(service).toBeTruthy();
  });
});
