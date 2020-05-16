import { Injectable } from '@angular/core';

import { Quiz } from '../models/quiz';
import { QUIZEES } from '../default-data/default-quizzes';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getQuizzes(): Quiz[] {
    return QUIZEES;
  }

}
