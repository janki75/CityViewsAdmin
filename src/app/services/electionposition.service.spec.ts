import { TestBed } from '@angular/core/testing';

import { ElectionpositionService } from './electionposition.service';

describe('ElectionpositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectionpositionService = TestBed.get(ElectionpositionService);
    expect(service).toBeTruthy();
  });
});
