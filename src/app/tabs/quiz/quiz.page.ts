import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    public categoriesService: CategoriesService,
  ) {}

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.categories = this.categoriesService.getCategories();
  }

  navigateQuiz(category: string) {
    let categoryId = null;
    this.categories.forEach(c => {
      if (c.name === category) {
        categoryId = c.id;
      }
    });

    this.router.navigateByUrl('/main/quiz/' + categoryId);
  }

}
