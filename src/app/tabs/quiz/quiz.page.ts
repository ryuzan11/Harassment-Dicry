import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/service/categories.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss']
})

export class QuizPage implements OnInit {
  titles = [
    'クイズ一覧', '上下関係', '性・恋愛', '身体', '心'
  ];

  get categories() {
    return this.categoriesService.categories;
  }

  constructor(
    public categoriesService: CategoriesService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  navigateQuiz(category: string) {
    let categoryId = null;
    this.categories.forEach(c => {
      if (c.name === category) {
        categoryId = c.id;
      }
    });

    this.navCtrl.navigateForward('/main/quiz/' + categoryId);
  }

}
