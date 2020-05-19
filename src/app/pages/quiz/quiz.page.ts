import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/shared/service/quizzes.service';
import { Quiz } from 'src/app/shared/models/quiz';
import { Category } from 'src/app/shared/models/category';
import { CategoriesService } from 'src/app/shared/service/categories.service';


@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss']
})

export class QuizPage implements OnInit {
  titles = [
    'クイズ一覧', '上下関係', '性・恋愛', '身体', '心'
  ];
  categories: Category[];
  quizzes: Quiz[];
  ids: string[] = [];

  constructor(
    private router: Router,
    public categoriesService: CategoriesService,
    public quizService: QuizService
  ) {}

  ngOnInit() {
    this.getCategory();
    this.getQuiz();
  }

  getCategory() {
    this.categories = this.categoriesService.getCategories();
  }

  getQuiz() {
    this.quizzes = this.quizService.getQuizzes();
  }

  navigateQuize(category: string) {
    const categoryId: string[] = [];
    this.categories.forEach(c => {
      if (c.name === category) {
        categoryId.push(c.id);
      }
    });

    this.quizzes.forEach(q => {
      if (q.category === category) {
        this.ids.push(q.id);
      }
    });
    // quizzesがない時、クイズ一覧を代入する
    this.shuffleArray();

    this.router.navigateByUrl('/main-tabs/quiz/' +
      (categoryId[0] ? categoryId[0] : '01')
      + '/' + this.ids[0]);
    this.ids = new Array();
  }

  shuffleArray() {
    for (let i = this.ids.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.ids[i], this.ids[j]] = [this.ids[j], this.ids[i]];
    }
  }
}
