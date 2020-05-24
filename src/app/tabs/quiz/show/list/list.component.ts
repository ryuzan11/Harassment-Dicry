import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/shared/service/quizzes.service';
import { Quiz } from 'src/app/shared/models/quiz';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'ls-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  quizzes: Quiz[];
  listIds: string[][] = [];
  nextPage = QuestionComponent;

  constructor(
    public quizService: QuizService
  ) { }

  ngOnInit() {
    this.getQuizzes();
    this.quizzes.forEach(q => {
      const id = q.id;
      const shuffleIds: string[] = [];
      this.quizzes.forEach(u => {
        if (u.id !== q.id) {
          shuffleIds.push(u.id);
        }
      });
      this.quizService.shuffleArray(shuffleIds).unshift(id);
      this.listIds.push(shuffleIds);
    });
  }

  getQuizzes() {
    this.quizzes = this.quizService.getQuizzes();
  }

}
