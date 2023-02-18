import { TestBed } from '@angular/core/testing';

import { Donorsearchv2Service } from './donorsearchv2.service';

describe('Donorsearchv2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Donorsearchv2Service = TestBed.get(Donorsearchv2Service);
    expect(service).toBeTruthy();
  });
});
