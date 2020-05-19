import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QuizService } from 'src/app/shared/service/quizzes.service';
import { Quiz } from 'src/app/shared/models/quiz';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  categoryId: string;
  quizId: string;
  quiz: Quiz;

  constructor(
    private route: ActivatedRoute,
    public quizService: QuizService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryId = params.get('categoryId');
      this.quizId = params.get('quizId');
    });
    this.getQuiz();
    console.log(this.quiz)
  }

  getQuiz() {
    this.quiz = this.quizService.getQuizFromId(this.quizId);
  }

}
