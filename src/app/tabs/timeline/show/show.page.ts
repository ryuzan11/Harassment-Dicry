import { Component, OnInit, OnDestroy, } from '@angular/core';
import { StoryService } from 'src/app/shared/api/story.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Story, Answer } from 'src/app/shared/models/story';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { AnswerService } from 'src/app/shared/api/answer.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/shared/models/i-user';
import { FirestoreService } from 'src/app/shared/api/firestore.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit, OnDestroy {

  uid: string;
  answer = '';
  answers: Answer[];
  user: User;
  storyId: string;
  story: Story;
  page = false;

  constructor(
    private auth: AuthService,
    private storyService: StoryService,
    private answerService: AnswerService,
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
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
      this.user = this.firestoreService.passUser;
      this.uid = this.user.uid;
      this.page = true;
    } else {
    this.uid = this.auth.getUserId();
    this.storyService.getStory(this.storyId).subscribe(s => {
      this.story = s.data();
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

  postAnswer() {
    this.firestoreService.userInit(this.uid).then(user => {
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
}
