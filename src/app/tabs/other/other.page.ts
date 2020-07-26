import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Plugins } from '@capacitor/core';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../shared/api/user.service';
import { ProfilePage } from '../../shared/ui/profile/profile.page';
import { StoryService } from 'src/app/shared/api/story.service';
import { Story, Answer } from 'src/app/shared/models/story';
import { Subscription } from 'rxjs';
import { AnswerService } from 'src/app/shared/api/answer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit, OnDestroy {
  stories: Story[];
  answers: Answer[];
  segment = '設定';
  categories = ['設定', 'My投稿', '回答'];
  private subscriptions = new Subscription();

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private auth: AuthService,
    private userService: UserService,
    private storyService: StoryService,
    private answerService: AnswerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.storyService.getUserStories(this.userService.uid).subscribe(story => {
        this.stories = story;
    }));
    this.subscriptions.add(
      this.answerService.getUserAnswers(this.userService.uid).subscribe(answer => {
        this.answers = answer;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  navigateUser() {
    this.router.navigateByUrl('/main/other/user/' + this.userService.uid);
  }

  getList(segment: string): Story[] | Answer[] {
    if (segment === 'My投稿') {
      return this.stories;
    } else if (segment === '回答') {
      return this.answers;
    }
  }

  async openProfile() {
    const modal = await this.modalCtrl.create({
      component: ProfilePage,
      backdropDismiss: false
    });
    return await modal.present();
  }

  async openUserDelete() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });

    const alert = await this.alertCtrl.create({
      header: '本当にアカウントを削除しますか？',
      message: '投稿した内容がある場合は、ユーザ名を「削除したユーザ」として今後も表示されます。今後、表示させたく場合は、投稿した内容を削除してからアカウントを削除してください。',
      buttons: [{
        text: 'キャンセル',
        role: 'cansel',
        cssClass: 'secondary'
      }, {
        text: '削除する',
        cssClass: 'danger',
        handler: async () => {
          loading.present();
          this.storyService.addUserDelete(this.userService.uid);
          this.userService.deleteUser(this.userService.uid).then(() => {
            // const user = firebase.auth().currentUser;
            // const credential = firebase.auth.EmailAuthProvider.credential(
            //     user.email,
            //     userProvidedPassword
            // );
            // user.reauthenticateWithCredential(credential);
            this.userService.currentUser.delete().then(() => {
              loading.dismiss().then(() => {
                this.router.navigateByUrl('/home');
                this.presentToast('削除しました');
              });
            })
            .catch(err => { console.error(err); });
          });
        }
      }]
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

  logOut(): void {
    this.auth.authSignOut();
  }

  localNotification(): void {
    Plugins.LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: 'ようこそ',
          body: 'Ionic Frameworkへ',
          schedule: {at: new Date(Date.now() + 1000 * 5)}
        }
      ]
    });
  }

}
