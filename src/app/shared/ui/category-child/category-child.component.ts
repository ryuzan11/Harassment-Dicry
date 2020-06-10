import { Component, OnInit, Optional  } from '@angular/core';
import { NavParams, NavController, ModalController, ActionSheetController, ToastController, IonRouterOutlet } from '@ionic/angular';
import { HarassmentsService } from '../../service/harassments.service';
import { ListStory } from '../../models/list-story';
import { Story } from '../../models/story';
import { AuthService } from 'src/app/auth/auth.service';
import { ActionListPage } from '../action-list/action-list.page';
import { ListService } from '../../api/list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'ls-category-child',
  templateUrl: './category-child.component.html',
  styleUrls: ['./category-child.component.scss'],
})
export class CategoryChildComponent implements OnInit {
  uid: string;
  listId: string;
  dictionaries: {
    'name': string;
    'harassmentId': string | undefined;
  }[];
  listStories: ListStory[];
  stories: {storyId: string, story: Story}[] = [];
  dictionaryNav: boolean;

  get harassments() {
    return this.harassmentsService.harassments;
  }

  constructor(
    private navParams: NavParams,
    private auth: AuthService,
    public harassmentsService: HarassmentsService,
    private navCtrl: NavController,
    private actionCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private listService: ListService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.uid = this.auth.getUserId();
    this.dictionaryNav = (this.navParams.data.children && this.navParams.data.children[0].name) ? true : false;
    if (this.dictionaryNav) {
      this.dictionaries = this.navParams.data.children;
      this.dictionaries.forEach(c => {
        this.harassments.forEach(h => {
          if (c.name === h.name) {
            c.harassmentId = h.id;
          }
        });
      });
    } else {
      this.listStories = this.navParams.data.children;
      this.listId = this.navParams.data.listId;
      this.listStories.forEach(l => {
        l.storyRef.get().then(s => {
          this.stories.push({storyId: l.storyId, story: s.data() as Story});
        });
      });
    }
  }

  navigateShow(id: string) {
    this.dictionaryNav ?
    this.navCtrl.navigateForward('/main/dictionary/' + id) :
    this.navCtrl.navigateForward('/main/timeline/' + id);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionCtrl.create({
      header: 'リスト編集',
      buttons: [{
        text: '削除する',
        role: 'destructive',
        handler: () => {
          this.listService.deleteList(this.uid, this.listId).then(() => {
            this.router.navigateByUrl('/main/list');
          });
          this.navCtrl.back();
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
