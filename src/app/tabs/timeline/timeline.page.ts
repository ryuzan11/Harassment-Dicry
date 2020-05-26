import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { FirestoreService } from '../../shared/api/firestore.service';
import { StoryService } from '../../shared/api/story.service';
import { ProfilePage } from 'src/app/shared/ui/profile/profile.page';
import { IUser } from '../../shared/models/i-user';
import { Story } from '../../shared/models/story';
import { StoryPostPage } from 'src/app/shared/ui/story-post/story-post.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.page.html',
  styleUrls: ['timeline.page.scss']
})
export class TimelinePage implements OnInit {
  uid: string;
  user: IUser;
  stories: Observable<Story[]>;

  @ViewChild(IonContent, { static: true})
  content: IonContent;

  constructor(
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public auth: AuthService,
    public storyService: StoryService,
    public firestore: FirestoreService,
    public router: Router
  ) {}

  async ngOnInit() {
    const user = await this.firestore.userInit(this.auth.getUserId());
    if (!user) {
      const modal = await this.modalCtrl.create({
        component: ProfilePage
      });
      await modal.present();
      modal.onDidDismiss().then(()  => this.ionViewWillEnter());
    }
    this.stories = this.storyService.initStory();
  }

  async ionViewWillEnter() {
    this.uid = this.auth.getUserId();
    this.user = await this.firestore.userInit(this.uid);
  }

  setPassStory(story: Story) {
    this.storyService.passStory = story;
  }

  trackByFn(index, item) {
    return item.storyId;
  }

  async openStoryPost() {
    const modal = await this.modalCtrl.create({
      component: StoryPostPage,
      backdropDismiss: false,
      componentProps: {
        content: this.content,
        uid: this.uid,
        user: this.user,
      }
    });
    await modal.present();
    modal.onWillDismiss().then(() => this.content.scrollToTop(100));
  }

  async openStoryEdit(story: Story, id: string) {
    const modal = await this.modalCtrl.create({
      component: StoryPostPage,
      backdropDismiss: false,
      componentProps: {
        content: this.content,
        storyId: id,
        preStory: story
      }
    });
    await modal.present();
    modal.onWillDismiss().then(() => this.content.scrollToTop(100));
  }

  async openStoryDelete(id: string) {
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
            this.storyService.deleteStory(id).then(result => {
              this.presentToast(result);
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

}
