import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { CategoryChildComponent } from '../category-child/category-child.component';
import { CreateListPage } from '../create-list/create-list.page';
import { AuthService } from 'src/app/auth/auth.service';
import { ListStory } from '../../models/list-story';

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
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {
    this.uid = this.auth.getUserId();
    this.params = this.navParams.data;
  }

  async openCreateList() {
    const modal = await this.modalCtrl.create({
      component: CreateListPage,
      backdropDismiss: false,
      cssClass: 'create-list-modal',
      componentProps: {
        uid: this.uid
      }
    });
    await modal.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: '追加した話がありません',
      duration: 1000
    });
    toast.present();
  }

  storyNav(child: ListStory[]): boolean {
    return (child !== undefined) && (child.length !== 0)  ? true : false;
  }

}
