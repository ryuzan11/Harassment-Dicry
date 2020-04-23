import { TestBed } from '@angular/core/testing';

import { PrefecturesService } from './prefectures.service';

describe('PrefecturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrefecturesService = TestBed.get(PrefecturesService);
    expect(service).toBeTruthy();
  });
});
