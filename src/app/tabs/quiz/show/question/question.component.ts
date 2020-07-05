import { Component, OnInit, ElementRef } from '@angular/core';
import { NavParams, AlertController, NavController } from '@ionic/angular';
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
    public alertCtrl: AlertController,
    public navCtrl: NavController,
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
    if (this.index !== (this.idsCount - 1)) {
      alertCtl = await this.alertCtrl.create({
        header: headerMessage,
        message: this.quiz.description,
        backdropDismiss: false,
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
      alertCtl = await this.alertCtrl.create({
        header: headerMessage,
        message: this.quiz.description,
        backdropDismiss: false,
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
    this.navCtrl.navigateForward('/main/dictionary/' + relateId);
  }

  exitQuiz() {
    // this.eleRef.nativeElement.
    this.router.navigateByUrl('/main/quiz'); // ここでtabsのquizを発火させる
  }

}
