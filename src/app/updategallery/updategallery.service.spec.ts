import { TestBed } from '@angular/core/testing';

import { UpdategalleryService } from './updategallery.service';

describe('UpdategalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdategalleryService = TestBed.get(UpdategalleryService);
    expect(service).toBeTruthy();
  });
});
