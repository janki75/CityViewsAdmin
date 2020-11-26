import { TestBed } from '@angular/core/testing';

import { OwnerserviceService } from './ownerservice.service';

describe('OwnerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnerserviceService = TestBed.get(OwnerserviceService);
    expect(service).toBeTruthy();
  });
});
