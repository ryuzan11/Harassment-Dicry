import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Quiz } from 'src/app/shared/models/quiz';
import { QuizService } from 'src/app/shared/service/quizzes.service';
import { Category } from 'src/app/shared/models/category';
import { CategoriesService } from 'src/app/shared/service/categories.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  navHome: any;
  categoryId: string;
  category: Category;
  quizzes: Quiz[];
  ids: string[] = [];

  constructor(
    private route: ActivatedRoute,
    public quizService: QuizService,
    public categoriesService: CategoriesService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryId = params.get('categoryId');
    });
    this.navHome = this.categoryId !== '01' ? QuestionComponent : null;

    this.getQuizzes();
    this.getCategory(this.categoryId);

    this.quizzes.forEach(q => {
      if (q.category === this.category.name) {
        this.ids.push(q.id);
      }
    });
    // quizzesがない時、クイズ一覧を代入する
    this.shuffleArray();
  }

  getCategory(id: string) {
    this.category = this.categoriesService.getCategoryFromId(id);
  }

  getQuizzes() {
    this.quizzes = this.quizService.getQuizzes();
  }

  shuffleArray() {
    for (let i = this.ids.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.ids[i], this.ids[j]] = [this.ids[j], this.ids[i]];
    }
  }

}
