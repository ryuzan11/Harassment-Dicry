import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ModalController, IonContent, AlertController, ToastController, ActionSheetController, LoadingController, IonInfiniteScroll } from '@ionic/angular';
import { UserService } from '../../shared/api/user.service';
import { StoryService } from '../../shared/api/story.service';
import { ProfilePage } from 'src/app/shared/ui/profile/profile.page';
import { IUser, Report } from '../../shared/models/i-user';
import { Story } from '../../shared/models/story';
import { StoryPostPage } from 'src/app/shared/ui/story-post/story-post.page';
import { Router } from '@angular/router';
import { ListService } from 'src/app/shared/api/list.service';
import { TimelineService } from './timeline.service';
import { List } from 'src/app/shared/models/list';
import { ListStory } from 'src/app/shared/models/list-story';
import { Subscription, Observable } from 'rxjs';
import { ReportModalPage } from 'src/app/shared/ui/report-modal/report-modal.page';
import { filter, take } from 'rxjs/operators';


@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.page.html',
  styleUrls: ['timeline.page.scss']
})
export class TimelinePage implements OnInit, OnDestroy {
  uid: string;
  user: IUser;
  lists: List[] = [];
  stories$: Observable<Story[]>;
  stories: Story[];
  storyCount = 0;
  storyIds: string[] = [];
  page = false;
  segment = '一覧';
  categories = ['一覧', '上下関係', '性・恋愛', '身体', '心'];
  private lastPageReachedSub: Subscription;
  private subscriptions = new Subscription();

  @ViewChild(IonContent, {static: true})
  content: IonContent;

  @ViewChild(IonInfiniteScroll, {static: false})
  infiniteScroll: IonInfiniteScroll;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private actionCtrl: ActionSheetController,
    private storyService: StoryService,
    private userService: UserService,
    private listService: ListService,
    private timelineService: TimelineService,
    public router: Router
  ) {}

  async ngOnInit() {
    this.uid = this.userService.uid;
    this.user = await this.userService.userInit(this.uid);
    this.userService.reports = this.user.report;
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

    this.stories$ = this.timelineService.watchStories();
    this.lastPageReachedSub = this.timelineService.watchLaxtPageReached().subscribe((reached: boolean) => {
      if ((reached && this.infiniteScroll)) {
        this.infiniteScroll.disabled = true;
      }
    });
    this.timelineService.watchStories().pipe(filter(f => !f), take(1)).subscribe((_stories: Story[]) => {
      this.timelineService.find();
      this.page = true;
    });
  }

  loadData(event: any) {
    setTimeout(async () => {
      this.timelineService.find();
      this.stories$.subscribe(data => {
        if (data.length >= 8 ) {
          this.storyCount = data.length;
        }
      });
      event.target.complete();
    }, 500);
  }

  async alertThirty(event: any) {
    const alert = await this.alertCtrl.create({
      header: '',
      message: '課金してください',
      buttons: [
        {
          text: 'キャンセル',
          role: 'cansel',
          handler: () => {
            event.target.complete();
          }
        }
      ]
    });
    await alert.present();
  }

  // async ionViewWillEnter() {
  //   this.user = await this.userService.userInit(this.uid);
  // }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    if (this.lastPageReachedSub) {
      this.lastPageReachedSub.unsubscribe();
    }
  }

  setPassInfo(story: Story) {
    this.userService.user = this.user;
    this.storyService.passStory = story;
  }

  checkDeadline(deadline: number): boolean {
    return new Date(deadline) < new Date() ? true : false;
  }

  checkReport(sid: string): boolean {
    const callback = (ele: Report) => ele.reportId === sid;
    return (this.userService.reports && this.userService.reports !== []) ? this.userService.reports.some(callback) : false;
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
          this.listService.updateList(this.uid, storyId, l.listId);
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
    // modal.onWillDismiss().then(() => this.content.scrollToTop(100));
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
    // modal.onWillDismiss().then(() => this.content.scrollToTop(100));
  }

  async openReportModal(uid: string, sid: string) {
    if (uid === this.uid) { return false; }
    const modal = await this.modalCtrl.create({
      component: ReportModalPage,
      componentProps: {
        id: sid,
        type: 'story'
      }
    });
    await modal.present();
  }

  async openDeleteAlert(id: string) {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });

    const alert = await this.alertCtrl.create({
      header: '削除してよろしいですか？',
      message: '削除すると復元できなくなります。',
      buttons: [{
        text: 'キャンセル',
        role: 'cansel',
        cssClass: 'secondary'
      }, {
        text: '削除',
        cssClass: 'danger',
        handler: () => {
          loading.present();
          this.storyService.deleteStory(id).then(() => {
            loading.dismiss().then(() => this.presentToast('削除しました'));
          }, err => {
            console.error(err);
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
