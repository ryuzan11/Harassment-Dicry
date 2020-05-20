import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from '@ionic/angular';
import { QuizService } from '../../../../shared/service/quizzes.service';
import { Quiz } from '../../../../shared/models/quiz';


@Component({
  selector: 'ls-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  quizId: string;
  quiz: Quiz;
  ids: string[];
  index = 0;

  constructor(
    private navParams: NavParams,
    public quizService: QuizService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.ids = (this.navParams.data as string[]);
    this.getQuiz(this.ids[this.index]);
  }

  getQuiz(id: string) {
    this.quiz = this.quizService.getQuizFromId(id);
  }

  async presentAnswer(a: string) {
    console.log(a);
    const answer = await this.alertController.create({
      header: '答え',
      message: '{{ids[index]}}',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: '次へ',
          handler: () => {
            this.nextQuiz();
            console.log(this.index);
          }
        }
      ]
    });

    await answer.present();
  }

  nextQuiz() {
    this.index += 1;
    this.getQuiz(this.ids[this.index]);
  }

}
