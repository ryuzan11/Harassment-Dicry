import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from '@ionic/angular';
import { QuizService } from '../../../../shared/service/quizzes.service';
import { Quiz } from '../../../../shared/models/quiz';
import { Router } from '@angular/router';
import { HarassmentsService } from 'src/app/shared/service/harassments.service';


@Component({
  selector: 'ls-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  quizId: string;
  quiz: Quiz;
  ids: string[];
  idsCount: number;
  index = 0;

  constructor(
    private router: Router,
    private navParams: NavParams,
    public quizService: QuizService,
    public harassmentsService: HarassmentsService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.ids = this.navParams.data.ids ? (this.navParams.data.ids as string[]) : (this.navParams.data as string[]);
    this.idsCount = this.ids.length;
    this.getQuiz(this.ids[this.index]);
  }

  getQuiz(id: string) {
    this.quiz = this.quizService.getQuizFromId(id);
  }

  async presentAnswer(answer: string) {
    const headerMessage = (answer === this.quiz.correct) ? '正解' : '残念';
    let alertCtl: HTMLIonAlertElement;
    // if (last-1 === this.index) 次が最後の問題です lase===-1 お疲れ様でした。Topに戻る
    if (this.index !== (this.idsCount - 1)) {
      alertCtl = await this.alertController.create({
        header: headerMessage,
        message: this.quiz.description,
        buttons: [
          {
            text: this.quiz.harassments[0],
            handler: () => {
              this.navigateHarassment();
            }
          }, {
            text: '次へ',
            handler: () => {
              this.nextQuiz();
            }
          }
        ]
      });
    } else if (this.index === (this.idsCount - 1)) {
      alertCtl = await this.alertController.create({
        header: headerMessage,
        message: this.quiz.description,
        buttons: [
          {
            text: this.quiz.harassments[0],
            handler: () => {
              this.navigateHarassment();
            }
          }, {
            text: 'お疲れ様でした',
            handler: () => {
              this.exitQuiz();
            }
          }
        ]
      });
    }
    await alertCtl.present();
  }

  nextQuiz() {
    this.index += 1;
    this.getQuiz(this.ids[this.index]);
  }

  navigateHarassment() {
    const relateId = this.harassmentsService.getHarassmentFromName(this.quiz.harassments[0]).id;
    this.router.navigateByUrl('/main-tabs/dictionary/' + relateId);
  }

  exitQuiz() {
    this.router.navigateByUrl('/main-tabs/quiz');
  }

}
