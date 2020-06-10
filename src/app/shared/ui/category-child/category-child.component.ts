import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, ModalController, ActionSheetController, ToastController } from '@ionic/angular';
import { HarassmentsService } from '../../service/harassments.service';
import { ListStory } from '../../models/list-story';
import { Story } from '../../models/story';
import { AuthService } from 'src/app/auth/auth.service';
import { ActionListPage } from '../action-list/action-list.page';
import { ListService } from '../../api/list.service';


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
  forwardButton = true;
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
    private toastCtrl: ToastController
  ) {
  }

  ngOnInit() {
    this.uid = this.auth.getUserId();
    this.dictionaryNav = ((this.navParams.data.children) && this.navParams.data.children[0].name) ? true : false;
    if ((this.navParams.data.children) && (this.navParams.data.children.length !== 0)) {
      this.forwardButton = this.navParams.data.children[0] === null ? false : true;
      this.dictionaryNav ? this.dictionaries = this.navParams.data.children : this.listStories = this.navParams.data.children;
      if (this.dictionaryNav) {
        this.dictionaries.forEach(c => {
          this.harassments.forEach(h => {
            if (c.name === h.name) {
              c.harassmentId = h.id;
            }
          });
        });
      } else {
        this.listId = this.navParams.data.listId;
        this.listStories.forEach(l => {
          l.storyRef.get().then(s => {
            this.stories.push({storyId: l.storyId, story: s.data() as Story});
          });
        });
      }
    } else {
      this.presentToast();
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
          this.listService.deleteList(this.uid, this.listId);
        }
      }, {
        text: 'リスト名を編集',
        handler: () => {
          this.navCtrl.navigateBack('/main/list');
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

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: '話を追加してください',
      duration: 1000
    });
    toast.present();
  }

}
