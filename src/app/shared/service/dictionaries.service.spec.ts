import { TestBed } from '@angular/core/testing';

import { DictionariesService } from './dictionaries.service';

describe('DictionariesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DictionariesService = TestBed.get(DictionariesService);
    expect(service).toBeTruthy();
  });
});
