import { TestBed } from '@angular/core/testing';

import { ManagemployeepositionService } from './managemployeeposition.service';

describe('ManagemployeepositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagemployeepositionService = TestBed.get(ManagemployeepositionService);
    expect(service).toBeTruthy();
  });
});
