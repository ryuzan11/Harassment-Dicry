import { TestBed } from '@angular/core/testing';

import { QuizService } from './quizzes.service';

describe('QuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizService = TestBed.get(QuizService);
    expect(service).toBeTruthy();
  });
});
