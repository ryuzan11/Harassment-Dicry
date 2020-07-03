import { Component, OnInit, OnDestroy, } from '@angular/core';
import { StoryService } from 'src/app/shared/api/story.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Story, Answer } from 'src/app/shared/models/story';
import { NavController, AlertController, ToastController, ModalController } from '@ionic/angular';
import { AnswerService } from 'src/app/shared/api/answer.service';
import { User, Report, IUser } from 'src/app/shared/models/i-user';
import { UserService } from 'src/app/shared/api/user.service';
import { DecideAnswerPage } from '../../../shared/ui/decide-answer/decide-answer.page';
import { ReportModalPage } from 'src/app/shared/ui/report-modal/report-modal.page';


@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit, OnDestroy {
  uid: string;
  answer = '';
  deadlineAnswer: Answer;
  answers: Answer[];
  user: User;
  iUser: IUser;
  storyId: string;
  story: Story;
  page = false;

  constructor(
    private storyService: StoryService,
    private answerService: AnswerService,
    private userService: UserService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.story = this.storyService.passStory;
    this.route.paramMap.subscribe((params: Params) => {
      this.storyId = params.get('storyId');
    });
    this.answerService.getAnswers(this.storyId).subscribe(a => {
      this.answers = a;
    });
    if (this.story) {
      this.user = this.userService.passUser;
      this.uid = this.user.uid;
      this.userService.userInit(this.uid).then(data => {
        this.iUser = data;
        this.getDeadlineAnswer();
        this.page = true;
      });
    } else {
      this.uid = this.userService.uid;
      this.userService.userInit(this.uid).then(data => {
        this.iUser = data;
      });
      this.storyService.getStory(this.storyId).subscribe(s => {
        this.story = s.data();
        this.getDeadlineAnswer();
        this.page = true;
      });
    }
  }

  ngOnDestroy() {
    this.answer = '';
  }

  backwardTimeline() {
    this.navCtrl.navigateBack('main/timeline');
  }

  checkDeadline(deadline: number): boolean {
    return new Date(deadline) < new Date() ? true : false;
  }

  checkReport(aid: string): boolean | any {
    const callback = (ele: Report) => ele.reportId === aid;
    return (this.iUser.report && this.iUser.report !== []) ? this.iUser.report.some(callback) : false;
  }

  getDeadlineAnswer() {
    if (!this.story.bestAnswer && this.checkDeadline(this.story.deadline)) {
      for (let i = 0; i < 1; i++) {
        this.deadlineAnswer = this.answers[0];
      }
    }
  }

  rebuildAnswers(): Answer[] {
    if (!this.checkDeadline(this.story.deadline) && this.story.type === '相談') { return this.answers; }

    const newAnswers: Answer[] = [];
    if (!!this.story.bestAnswer) {
      this.answers.forEach(a => {
        if (a.answerId !== this.story.bestAnswer.answerId) {
          newAnswers.push(a);
        }
      });
    } else if (!this.story.bestAnswer && this.checkDeadline(this.story.deadline)) {
      this.answers.forEach((a, i) => {
        if (i !== 0) {
          newAnswers.push(a);
        }
      });
    }
    return newAnswers;
  }

  postAnswer() {
    this.userService.userInit(this.uid).then(user => {
      const {profile, ...other} = user;
      this.user = {uid: this.uid, ...other};
      this.answerService.addAnswer(this.storyId, this.user, this.answer, this.story.story);
      this.answer = '';
    });
  }

  update(event: string, aid: string) {
    this.answerService.updateAnswer(this.storyId, aid, event);
  }

  async openDeleteAlert(sid: string, aid: string) {
    const alert = await this.alertCtrl.create({
      header: '削除してよろしいですか？',
      message: '削除すると復元できなくなります。',
      buttons: [
        {
          text: 'キャンセル',
          role: 'cansel',
          cssClass: 'secondary'
        }, {
          text: '削除',
          cssClass: 'danger',
          handler: () => {
            this.answerService.deleteAnswer(sid, aid).then(result => {
              this.presentToast(result);
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(text: string) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

  async openDecideModal() {
    const modal = await this.modalCtrl.create({
      component: DecideAnswerPage,
      componentProps: {
        answers: this.answers,
        sid: this.storyId
      }
    });
    return await modal.present();
  }

  async openReportModal(uid: string, aid: string) {
    if (uid === this.uid) { return false; }
    const modal = await this.modalCtrl.create({
      component: ReportModalPage,
      componentProps: {
        id: aid,
        sid: this.storyId,
        type: 'answer'
      }
    });
    await modal.present();
  }
}
