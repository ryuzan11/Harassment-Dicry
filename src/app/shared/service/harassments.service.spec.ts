import { TestBed } from '@angular/core/testing';

import { HarassmentsService } from './harassments.service';

describe('HarassmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HarassmentsService = TestBed.get(HarassmentsService);
    expect(service).toBeTruthy();
  });
});
