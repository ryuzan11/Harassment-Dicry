import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { CategoryChildComponent } from '../category-child/category-child.component';
import { ActionListPage } from '../action-list/action-list.page';
import { AuthService } from 'src/app/auth/auth.service';
import { ListStory } from '../../models/list-story';
import { ListService } from '../../api/list.service';

@Component({
  selector: 'ls-category-parent',
  templateUrl: './category-parent.component.html',
  styleUrls: ['./category-parent.component.scss'],
})
export class CategoryParentComponent implements OnInit {
  uid: string;
  params: {[key: string]: any};
  nextPage = CategoryChildComponent;
  listNav: boolean;

  constructor(
    private navParams: NavParams,
    private auth: AuthService,
    private listService: ListService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {
    this.uid = this.auth.getUserId();
    this.params = this.navParams.data;
  }

  async openAddList() {
    const modal = await this.modalCtrl.create({
      component: ActionListPage,
      backdropDismiss: false,
      cssClass: 'action-list-modal',
      componentProps: {
        uid: this.uid,
        type: 'add'
      }
    });
    await modal.present();
  }

  storyCount(child: ListStory[]): number | undefined {
    return (child) && (child.length !== 0)  ? child.length : undefined ;
  }

  async presentToast(listId: string) {
    const toast = await this.toastCtrl.create({
      header: '話を追加していません',
      message: 'リストを削除しますか？',
      color: 'tertiary',
      buttons: [
        {
          text: '削除する',
          handler: () => {
            this.listService.deleteList(this.uid, listId);
          }
        }, {
          text: 'キャンセル',
          role: 'cancel',
        }
      ]
    });
    toast.present();
  }

}
