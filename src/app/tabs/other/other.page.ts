import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../shared/api/user.service';
import { ProfilePage } from '../../shared/ui/profile/profile.page';
import { StoryService } from 'src/app/shared/api/story.service';
import { Story, Answer } from 'src/app/shared/models/story';
import { Subscription } from 'rxjs';
import { AnswerService } from 'src/app/shared/api/answer.service';


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
    private auth: AuthService,
    private userService: UserService,
    private storyService: StoryService,
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.storyService.getUserStories(this.userService.user.uid).subscribe(story => {
        this.stories = story;
    }));
    this.subscriptions.add(
      this.answerService.getUserAnswers(this.userService.user.uid).subscribe(answer => {
        this.answers = answer;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
