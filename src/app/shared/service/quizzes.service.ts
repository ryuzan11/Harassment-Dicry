import { Injectable } from '@angular/core';

import { Quiz } from '../models/quiz';
import { QUIZZES } from '../default-data/default-quizzes';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getQuizzes(): Quiz[] {
    return QUIZZES;
  }

  getQuizFromId(id: string): Quiz {
    for (const q of QUIZZES) {
      if (q.id === id && q.state === 'public') {
        return q;
      }
    }
  }

}
