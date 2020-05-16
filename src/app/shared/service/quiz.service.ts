import { Injectable } from '@angular/core';

import { Quiz } from '../models/quiz';
import { QUIZ } from '../default-data/default-quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getQuizzes(): Quiz[] {
    return QUIZ;
  }

}
