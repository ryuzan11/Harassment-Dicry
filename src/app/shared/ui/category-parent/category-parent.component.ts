import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { CategoryChildComponent } from '../category-child/category-child.component';
import { ActionListPage } from '../action-list/action-list.page';
import { ListStory } from '../../models/list-story';
import { ListService } from '../../api/list.service';
import { UserService } from '../../api/user.service';

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
    private userService: UserService,
    private listService: ListService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.uid = this.userService.uid;
    this.params = this.navParams.data;
  }

  async openAddList() {
    const modal = await this.modalCtrl.create({
      component: ActionListPage,
      backdropDismiss: false,
      cssClass: 'action-list-modal',
      componentProps: {
        uid: this.uid,
        modalType: 'add'
      }
    });
    await modal.present();
  }

  storyCount(child: ListStory[]): number | undefined {
    return (child) && (child.length !== 0)  ? child.length : undefined ;
  }

  async presentAlert(name: string, lId: string) {
    const alert = await this.alertCtrl.create({
      header: '話を追加していません。',
      message: name + 'を削除しますか？',
      backdropDismiss: false,
      buttons: [
        {
          text: '削除',
          handler: () => {
            this.listService.deleteList(this.uid, lId);
          }
        }, {
          text: 'キャンセル',
          role: 'cancel',
        }
      ]
    });
    alert.present();
  }

}
