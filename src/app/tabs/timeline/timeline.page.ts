import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ModalController, IonContent, AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { UserService } from '../../shared/api/user.service';
import { StoryService } from '../../shared/api/story.service';
import { ProfilePage } from 'src/app/shared/ui/profile/profile.page';
import { IUser } from '../../shared/models/i-user';
import { Story } from '../../shared/models/story';
import { StoryPostPage } from 'src/app/shared/ui/story-post/story-post.page';
import { Router } from '@angular/router';
import { ListService } from 'src/app/shared/api/list.service';
import { List } from 'src/app/shared/models/list';
import { ListStory } from 'src/app/shared/models/list-story';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.page.html',
  styleUrls: ['timeline.page.scss']
})
export class TimelinePage implements OnInit, OnDestroy {
  uid: string;
  user: IUser;
  lists: List[] = [];
  stories: Story[];
  storyIds: string[] = [];
  page = false;
  segment = '一覧';
  categories = ['一覧', '上下関係', '性・恋愛', '身体', '心'];
  private subscriptions = new Subscription();

  @ViewChild(IonContent, {static: true})
  content: IonContent;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private actionCtrl: ActionSheetController,
    private storyService: StoryService,
    private userService: UserService,
    private listService: ListService,
    public router: Router
  ) {}

  async ngOnInit() {
    this.uid = this.userService.user.uid;
    this.user = await this.userService.userInit(this.uid);
    // if (!this.iUser) {
    //   const modal = await this.modalCtrl.create({
    //     component: ProfilePage
    //   });
    //   await modal.present();
    //   modal.onDidDismiss().then(()  => this.ionViewWillEnter());
    // }
    this.subscriptions.add(
      this.listService.getLists(this.uid).subscribe(data => {
        this.lists = data;
    }));
    this.subscriptions.add(this.storyService.initStory().subscribe(data => {
        this.stories = data;
        this.page = true;
    }));
  }

  async ionViewWillEnter() {
    this.user = await this.userService.userInit(this.uid);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setPassInfo(story: Story) {
    const {profile, ...other} = this.user;
    this.userService.passUser = {uid: this.uid, ...other};
    // this.userService.passUser = {uid: this.uid, ...this.user}; // 使えないのか
    this.storyService.passStory = story;
  }

  checkDeadline(deadline: number): boolean {
    return new Date(deadline) < new Date() ? true : false;
  }

  trackByFn(index: number, item: Story & {storyId: string}) {
    return item ? item.storyId : null;
  }

  actionDismiss(): void {
    this.actionCtrl.dismiss();
  }

  async openListAction(storyId: string) {
    const actionBtns: any[] = [];
    this.lists.forEach((l: List & {listId: string}) => {
      actionBtns.push({
        text: l.name,
        handler: () => {
          this.listService.setList(this.uid, storyId, l.listId);
          this.storyService.upCount(storyId);
          this.actionDismiss();
        }
      });
    });
    actionBtns.push({
      text: 'キャンセル',
      role: 'cancel',
    });

    const actionSheet = await this.actionCtrl.create({
      header: 'リスト一覧',
      // backdropDismiss: false,
      buttons: actionBtns
    });
    await actionSheet.present();
  }

  deleteListStory(storyId: string) {
    this.listService.deleteListStory(this.uid, this.searchList(storyId));
    this.storyService.downCount(storyId);
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

  async openEditModal(story: Story, id: string) {
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

  async openDeleteAlert(id: string) {
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

  async presentToast(text: string) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

  searchList(storyId: string): {[key: string]: string | ListStory} | undefined {
    let listStory: {[key: string]: string | ListStory};
    if (this.lists) {
      this.lists.forEach((list: List & {listId: string}) => {
        if (list.children) {
          for (const child of list.children) {
            if (child.storyId === storyId) {
              listStory = {listId: list.listId, storyInfo: child};
            }
          }
        }
      });
    }
    return listStory;
  }
}
