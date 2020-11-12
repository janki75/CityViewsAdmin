import { TestBed } from '@angular/core/testing';

import { FlatsService } from './flats.service';

describe('FlatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlatsService = TestBed.get(FlatsService);
    expect(service).toBeTruthy();
  });
});
