import { Component, OnInit, Optional  } from '@angular/core';
import { NavParams, NavController, ModalController, ActionSheetController, ToastController, IonRouterOutlet } from '@ionic/angular';
import { HarassmentsService } from '../../service/harassments.service';
import { ListStory } from '../../models/list-story';
import { Story } from '../../models/story';
import { ActionListPage } from '../action-list/action-list.page';
import { ListService } from '../../api/list.service';
import { Router } from '@angular/router';
import { UserService } from '../../api/user.service';


@Component({
  selector: 'ls-category-child',
  templateUrl: './category-child.component.html',
  styleUrls: ['./category-child.component.scss'],
})
export class CategoryChildComponent implements OnInit {
  uid: string;
  listId: string;
  type: string;
  datas: {
    id: string | undefined;
    name?: string;
    story: Story;
  }[];
  listStories: ListStory[];
  page = false;

  get harassments() {
    return this.harassmentsService.harassments;
  }

  constructor(
    private navParams: NavParams,
    private userService: UserService,
    public harassmentsService: HarassmentsService,
    private navCtrl: NavController,
    private actionCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private listService: ListService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.uid = this.userService.uid;
    if (this.navParams.data.name === 'ハラスメントとは?') {
      this.type = 'ハラスメントとは?';
    } else if (this.navParams.data.name === '関連団体') {
      this.type = '関連団体';
    } else if (this.navParams.data.children && this.navParams.data.children[0].name) {
      this.type = 'ハラスメント';
    } else {
      this.type = 'リスト';
    }

    if (this.type === '関連団体') {
      this.datas = this.navParams.data.children;
    } else if (this.type === 'ハラスメント') {
      this.datas = this.navParams.data.children;
      this.datas.forEach(d => {
        this.harassments.forEach(h => {
          if (d.name === h.name) {
            d.id = h.id;
          }
        });
      });
    } else if (this.type === 'リスト') {
      this.listStories = this.navParams.data.children;
      this.listId = this.navParams.data.listId;
      this.datas = [];
      this.listStories.forEach(async l => {
        await l.storyRef.get().then(s => {
          this.datas.push({id: l.storyId, story: s.data() as Story});
        });
      });
    }
  }

  titleName(): string {
    if (this.type === '関連団体') {
      return '関連団体';
    } else if (this.type === 'ハラスメント') {
      return 'ハラスメント';
    } else if (this.type === 'リスト') {
      return 'リスト';
    }
  }

  navigateShow(id: string) {
    console.log(id);
    if (this.type === '関連団体') {
      this.navCtrl.navigateForward('/main/dictionary/organization/' + id);
    } else if (this.type === 'ハラスメント') {
      this.navCtrl.navigateForward('/main/dictionary/harassment/' + id);
    } else if (this.type === 'リスト') {
      this.navCtrl.navigateForward('/main/timeline/' + id);
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionCtrl.create({
      header: 'リスト編集',
      buttons: [{
        text: '削除する',
        role: 'destructive',
        handler: () => {
          this.listService.deleteList(this.uid, this.listId, this.listStories);
          this.navCtrl.back();
          this.router.navigateByUrl('/main/list'); // 何故かこれでmain/listでpopみたいなことが行われている
        }
      }, {
        text: 'リスト名を編集',
        handler: () => {
          this.openEditList();
        }
      }, {
        text: '公開制限を変更する'
      }, {
        text: 'キャンセル',
        role: 'cancel',
      }]
    });

    await actionSheet.present();
  }

  async openEditList() {
    const modal = await this.modalCtrl.create({
      component: ActionListPage,
      backdropDismiss: false,
      cssClass: 'action-list-modal',
      componentProps: {
        uid: this.uid,
        type: 'edit'
      }
    });
    await modal.present();
  }

}
