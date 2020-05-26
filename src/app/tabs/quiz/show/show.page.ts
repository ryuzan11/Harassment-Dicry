import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Quiz } from 'src/app/shared/models/quiz';
import { QuizService } from 'src/app/shared/service/quizzes.service';
import { Category } from 'src/app/shared/models/category';
import { CategoriesService } from 'src/app/shared/service/categories.service';
import { ListComponent } from './list/list.component';

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
    this.navHome = this.categoryId === '01' ? ListComponent : QuestionComponent;

    this.getQuizzes();
    this.getCategory(this.categoryId);

    this.quizzes.forEach(q => {
      if (this.categoryId !== '01') {
        if (q.category === this.category.name) {
          this.ids.push(q.id);
        }
        this.ids = this.quizService.shuffleArray(this.ids);
      } else {
        this.ids.push(q.id);
      }
    });
  }

  getCategory(id: string) {
    this.category = this.categoriesService.getCategoryFromId(id);
  }

  getQuizzes() {
    this.quizzes = this.quizService.getQuizzes();
  }

}
